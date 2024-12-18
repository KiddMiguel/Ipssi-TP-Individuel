const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: { type: String, required: true },
  phone_number: {
    type: String,
    unique: true,
    sparse: true,
    match: /^\+?[0-9]{7,15}$/,
  },
  address: { type: String },
  profile_picture: { type: String },
  role: { type: String, enum: ["admin", "user", "seller"], default: "user" },
  status: {
    type: String,
    enum: ["active", "inactive", "banned"],
    default: "active",
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

userSchema.pre("save", function (next) {
  this.updated_at = new Date();
  next();
});

userSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
