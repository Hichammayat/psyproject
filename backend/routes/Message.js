const express = require("express");
const{creatMessage} = require("../controllers/Message")

const router = express.Router();
router.post("/message/:chatId/:psychiatre_id/:user_id", creatMessage)

module.exports = router;