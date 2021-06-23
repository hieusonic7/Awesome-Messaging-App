import mongoose from "mongoose";
let Schema = mongoose.Schema;
let MessageSchema = new Schema({
  sender: {
    username: String,
    avatar: {type: String, default: "default_avatar.jpg"}
  },
  recieve: {
    username: String,
    avatar: {type: String, default: "default_avatar.jpg"}
  },
  type: String,
  content: String,
  isRead: { type: Boolean, default: false},
  createAt: {type: Number, default: Date.now}
})

module.exports = mongoose.model("notification", MessageSchema);
