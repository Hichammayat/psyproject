const express = require("express");
const{sendNotif} = require("../controllers/notifyer")
const{getNotif} = require("../controllers/notifyer")
const router = express.Router();
router.post("/SendNotif/:user_id", sendNotif)
router.get("/GetNotif/:psychiatre_id", getNotif)

module.exports = router;