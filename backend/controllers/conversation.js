const ConversationModel = require("../modules/ConversationSchema");

exports.createConversation= async (req,res)=>{
    const newConversation = req.body
    try {
        const conversation = new ConversationModel(newConversation)
        const saved = await conversation.save()
        if (saved)res.send(saved)
        else res.send("conversation not created")
    } catch (error) {
        console.log(error)
    }
}