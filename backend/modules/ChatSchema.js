import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
  user_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref : "users",
    required: true
  },
  psychiatre_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref : "psychiatres",
    required: true
  },
  
  timestamps: true,
  }
);

const ChatModel = mongoose.model("Chat", ChatSchema);
export default ChatModel;