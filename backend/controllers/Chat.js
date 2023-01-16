const chatModel = require("../modules/ChatSchema")


exports.creatChat= async (req, res) =>{
    const chat= req.body
    console.log(chat)
    try{
         
            const newChat= new chatModel(chat)
            const saved = await newChat.save()
            console.log(saved)
            if (saved)res.send(saved)
        else res.send("chat not inserted")
        

    }catch(err) {console.error(err)}}