import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBTEKu-vMwQbiJp_LQfSPkvtPbnr4p6obY",
  authDomain: "chrome-extension-time-tracker.firebaseapp.com",
  projectId: "chrome-extension-time-tracker",
  storageBucket: "chrome-extension-time-tracker.firebasestorage.app",
  messagingSenderId: "698262129397",
  appId: "1:698262129397:web:6e72588a312db81dd1d3bc",
  measurementId: "G-B37RXEX720"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Login with popup
function login(callback) {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      localStorage.setItem("userId", user.uid);
      user.getIdToken().then((token) => {
        chrome.storage.local.set({ authToken: token });
        callback(user);
      });
    })
    .catch(console.error);
}

// Get logged-in user and store token
function getCurrentUser(callback) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      localStorage.setItem("userId", user.uid);
      user.getIdToken().then((token) => {
        chrome.storage.local.set({ authToken: token });
      });
    }
    callback(user);
  });
}

export { login, getCurrentUser };