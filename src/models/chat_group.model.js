import mongoose from "mongoose";
let Schema = mongoose.Schema;
let chat_groupSchema = new Schema ({
  name: String,
  usersAmount: {type: Number, min: 3, max: 200},
  messagesAmount: {type: Number, default: 0},
  UserId: String,
  members: [
    {userId: String}
  ],
  createdAt: {type: Number, default: Date.now},
  updatedAt: {type: Number, default: null},
  deletedAt: {type: Number, default: null}
})

module.exports = mongoose.model("chat_group", chat_groupSchema);
