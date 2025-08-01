# Chrome-extension-for-time-tracking
## Chrome Extension: Codtech Tracker

## 📄 Description

Codtech Tracker is a lightweight and user-friendly Chrome extension that allows users to register, log in, and track their progress or activity directly from the browser. It is built with Firebase Authentication and stores user-specific data securely using a custom backend server.


##  Features

* User Registration & Login (with Firebase Auth)
* Tracks data specific to the logged-in user
* Stores tracked data to MongoDB via Express backend
* Easy access through Chrome popup
* Clean and responsive UI


##  How It Works

1. **User registers/logs in** through the popup UI.
2. **Firebase Authentication** handles login securely.
3. On successful login, the **access token** is fetched.
4. User activity/data is tracked and **sent to a local Express server** (`localhost:4000`) which stores it in **MongoDB**.
5. All interactions happen within the popup, making the experience seamless.


##  Technologies Used

* HTML, CSS, JavaScript
* Firebase Authentication
* Node.js & Express (Backend)
* MongoDB (Database)
* Chrome Extension APIs


##   Setup Instructions

1. Clone the repo
2. Install dependencies in your Express backend:

   ```bash
   npm install
   ```
3. Start your local server:

   ```bash
   node index.js
   ```
4. In Chrome:

   * Go to `chrome://extensions`
   * Enable **Developer Mode**
   * Click **Load Unpacked**
   * Select the `extension` folder


## 📸 Screenshots

*1. Extension Popup UI (Logged In)*
<img width="1016" height="1025" alt="Image" src="https://github.com/user-attachments/assets/250157df-ef7c-456f-b419-85b0099f814f" />

*2. Extension Popup UI (Logged Out)*
<img width="1024" height="1023" alt="Image" src="https://github.com/user-attachments/assets/730d73e6-e5bd-4fb4-975d-0baf4bc7a33c" />

*3. Successful Data Tracking or Upload*
<img width="1030" height="1014" alt="Image" src="https://github.com/user-attachments/assets/6272c449-630c-469b-9e59-74243c208f29" />

*4. Chrome Extension Page*
<img width="1911" height="1063" alt="Image" src="https://github.com/user-attachments/assets/f2ad68b6-abe8-4210-876b-b2a9578e162a" />






