const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  email: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
