const express = require("express");

const{newPost} =require("../controllers/Post")
const{displayPost}=require("../controllers/Post")
const router = express.Router();

router.post("/Post/:psychiatre_id", newPost);
router.get("/displayPost/:psychiatre_id", displayPost)
module.exports = router;