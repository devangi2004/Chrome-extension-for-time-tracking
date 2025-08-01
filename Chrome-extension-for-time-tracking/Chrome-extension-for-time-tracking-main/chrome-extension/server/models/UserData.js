//Contains Mongoose schema.

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  userId: String,
  trackingData: Object,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("UserData", schema);


