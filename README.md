# ⏱️ Chrome Extension for Time Tracking

A lightweight and simple Chrome Extension to track the time you spend on different websites. Ideal for productivity monitoring and digital wellbeing.

---

## 🚀 Features

- ⏰ Real-time tracking of time spent on each website
- 📊 Daily usage report in the extension popup
- 💾 Data stored locally in your browser
- 🔒 No third-party tracking or data sharing

---

## 🛠️ Tech Stack

- HTML5, CSS3, JavaScript
- Chrome Extension APIs (`background`, `popup`, `storage`)
- Local Storage for data persistence

---
```
## 📂 Project Structure

Chrome-extension-for-time-tracking/
│
├── background.js         # Handles tracking in the background
├── popup.html            # User interface of the extension
├── popup.js              # Logic for the popup display
├── manifest.json         # Chrome extension configuration
├── icons/                # Extension icons
├── styles.css            # Styling for popup UI
└── screenshots/          # Folder for UI screenshots (optional)

````

---

## 📦 Installation

Setup Instructions
Clone the repo

Install dependencies in your Express backend:
```
npm install
````
Start your local server:
```
node index.js
````
In Chrome:

Go to chrome://extensions

Enable Developer Mode

Click Load Unpacked

Select the extension folder

---

## 🧪 Usage

1. Browse the internet as usual.
2. Click the extension icon to view time spent on each website.
3. The data resets daily (or customize it to reset weekly/monthly).

---

## 🖼️ Screenshots

### 1. 📌 Extension Popup UI – Logged In

![Image](https://github.com/user-attachments/assets/239b1b75-2bd0-4025-8a2c-69e50443c11c)

### 2. 🔒 Extension Popup UI – Logged Out

![Image](https://github.com/user-attachments/assets/84986959-60e4-42fe-9cee-f9214608bfca)

### 3. ✅ Successful Data Tracking or Upload

![Image](https://github.com/user-attachments/assets/09310e53-ca41-4a52-9c7d-6c66fea541e8)

### 4. ⚙️ Chrome Extension Settings Page

![Image](https://github.com/user-attachments/assets/40c716ec-d417-4400-abd6-7c3a15298bbb)

---

## 🔒 Permissions

The extension requires the following permissions:

* `tabs`: To track which tab is active.
* `storage`: To store time tracking data.
* `activeTab`: To access currently used tab.

---

## 📝 Customization

You can:

* Modify the `popup.html` and `popup.js` to change how stats are displayed.
* Update styles in `styles.css` for a different look and feel.
* Extend functionality to include export, goal setting, or time limits.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♀️ About Me

**Devangi Inani**
👩‍🎓 CSE Final Year @ Government Women's Engineering College, Ajmer

🎨 Full Stack Web Development Intern @ CodeTech

---

