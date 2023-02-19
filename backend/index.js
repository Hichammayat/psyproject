const express = require("express")
const cors = require("cors")
const fileupload = require("express-fileupload")
const mongoose  = require("mongoose");

const authRouter = require("./routes/auth");
const questionnaireRouter = require("./routes/questionnaire")
const psychiatreRouter = require("./routes/psychiatre")
const PostRouter = require("./routes/Post")
const NotifRouter = require("./routes/notifyer")
const conversationRouter = require("./routes/conversation")





const app = express()
app.listen(9000, ()=>console.log("running"))

app.use(express.json())
app.use(fileupload())
app.use(cors())
mongoose.connect("mongodb://localhost/psyapp")

app.use(authRouter)
app.use(questionnaireRouter)
app.use(psychiatreRouter)
app.use(PostRouter)
app.use(NotifRouter)
app.use(conversationRouter)