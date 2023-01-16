const express = require("express");
const{Questionnaire} = require("../controllers/questionnaire")

const router = express.Router();

router.post("/Questionnaire/:user_id", Questionnaire);

module.exports = router;