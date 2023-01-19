const NotifyerDBModel = require("../modules/notifyerschema")

exports.sendNotif= async (req,res)=>{
    const newNotif = req.body
    try {
        const notification = new NotifyerDBModel(newNotif)
        const saved = await notification.save()
        if (saved)res.send(saved)
        else res.send("notif not sended")
    } catch (error) {
        console.log(error)
    }
}
exports.getNotif= async (req,res)=>{
    const id =req.params.psychiatre_id
    console.log("one")
    try{
        const NotifId = await NotifyerDBModel.find({notif_to_psychiatre : id})
        console.log(NotifId)
            res.send(NotifId)
        }catch(err){console.log(err.message)}
}