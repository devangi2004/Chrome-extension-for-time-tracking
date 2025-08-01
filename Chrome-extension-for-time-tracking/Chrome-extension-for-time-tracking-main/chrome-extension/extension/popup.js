// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { auth } from './firebase-config.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// DOM elements
const emailInput = document.getElementById("email");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const statusDiv = document.getElementById("status");
const uploadSection = document.getElementById("upload-section");
const uploadBtn = document.getElementById("uploadBtn");
const uploadStatus = document.getElementById("upload-status");
const trackingData = document.getElementById("trackingData");
const userInfo = document.getElementById("user-info");
const timeList = document.getElementById("timeList");

// Show/Hide upload section based on auth state
onAuthStateChanged(auth, (user) => {
  if (user) {
    uploadSection.style.display = "block";
    userInfo.textContent = `👤 Logged in as: ${user.email}`;
    statusDiv.textContent = "✅ Authenticated";
  } else {
    uploadSection.style.display = "none";
    userInfo.textContent = "";
    statusDiv.textContent = "🔒 Please log in.";
  }
});

// Register user
registerBtn.addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      statusDiv.textContent = "✅ Registered and logged in!";
    })
    .catch((error) => {
      statusDiv.textContent = `❌ Registration error: ${error.message}`;
    });
});

// Login user
loginBtn.addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      statusDiv.textContent = "✅ Logged in successfully!";
    })
    .catch((error) => {
      statusDiv.textContent = `❌ Login error: ${error.message}`;
    });
});

// Logout user
logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      statusDiv.textContent = "🔓 Logged out.";
      uploadSection.style.display = "none";
      userInfo.textContent = "";
      emailInput.value = "";
      passwordInput.value = "";
    })
    .catch((error) => {
      statusDiv.textContent = `❌ Logout error: ${error.message}`;
    });
});

// Upload tracking data (dummy functionality)
uploadBtn.addEventListener("click", () => {
  const data = trackingData.value.trim();
  if (data) {
    const listItem = document.createElement("li");
    listItem.textContent = data;
    timeList.appendChild(listItem);
    uploadStatus.textContent = "✅ Data uploaded!";
    trackingData.value = "";
  } else {
    uploadStatus.textContent = "⚠️ Please enter tracking data.";
  }
});
