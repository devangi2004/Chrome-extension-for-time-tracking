const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const path = require('path');
const UserData = require('./models/UserData');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// ✅ Serve static files from the "extension" folder
app.use(express.static(path.join(__dirname, '..', 'extension')));

// MongoDB connection
mongoose.connect('mongodb+srv://jahanvisaini:Time_Tracker2025@cluster0.os8kqvy.mongodb.net/chrome-extension')
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

// Define UserData schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});
const User = mongoose.model("User", userSchema);

// Register a new user
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPass });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid password" });

    res.status(200).json({ message: "Login successful", user: { username: user.username, email: user.email } });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

// Upload tracking data
app.post("/upload", async (req, res) => {
  const { userId, trackingData } = req.body;

  await UserData.findOneAndUpdate(
    { userId },
    { trackingData, date: new Date() },
    { upsert: true }
  );

  res.send("Data uploaded!");
});

// ✅ Serve popup.html 
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'extension', 'popup.html'));
});


// Start the server
app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
