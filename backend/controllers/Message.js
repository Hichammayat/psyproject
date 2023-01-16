const messageModel =require ("../modules/MessagesSchema")

exports.creatMessage = async (req, res) =>{
    const message= req.body
    console.log(message)
    try{
         
            const newMessage= new messageModel(message)
            const saved = await newMessage.save()
            console.log(saved)
            if (saved)res.send(saved)
        else res.send("message not inserted")
        

    }catch(err) {console.error(err)}}