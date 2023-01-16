const express = require("express");
const{creatChat} = require("../controllers/Chat")

const router = express.Router();

router.post("/chat/:psychiatre_id/:user_id", creatChat)

module.exports = router;