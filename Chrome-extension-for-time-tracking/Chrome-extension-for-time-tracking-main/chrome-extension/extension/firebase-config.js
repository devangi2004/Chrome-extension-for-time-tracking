import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
      apiKey: "AIzaSyBTEKu-vMwQbiJp_LQfSPkvtPbnr4p6obY",
      authDomain: "chrome-extension-time-tracker.firebaseapp.com",
      projectId: "chrome-extension-time-tracker",
      storageBucket: "chrome-extension-time-tracker.appspot.com",
      messagingSenderId: "698262129397",
      appId: "1:698262129397:web:6e72588a312db81dd1d3bc",
      measurementId: "G-B37RXEX720"
    };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
