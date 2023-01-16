const mongoose = require("mongoose");

const PostSchema =  mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    psychiatre_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "psychiatres",
        required: true
    },
    liked:{
      type: Boolean,
      required: true
      
    
   
  },

    
  },
  { timestamps: true }
);
const PostModel = mongoose.model("Post", PostSchema)
module.exports = PostModel
