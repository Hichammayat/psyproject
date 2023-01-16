import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    chatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref : "chat",
      required: true
    },
    sender: {
      type: String,
    },
    recipient:{
      type: String
    },
    text: {
      type: String,
    },
    senderRole:{
      type: String
    },
  },
  {
    timestamps: true,
  }
);

const MessageModel = mongoose.model("Message", MessageSchema);
export default MessageModel