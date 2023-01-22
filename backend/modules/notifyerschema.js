const {mongoose}  = require('mongoose')
const db =require('mongoose')

const NotifyerModel = db.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "users",
        required: true
    },
    psychiatre_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "psychiatres",
        required: true
    },
    read:{
        type: Boolean,
        required: true,
    }
},
{
    timestamps: true,
  })


const NotifyerDBModel = mongoose.model('notifications', NotifyerModel)

module.exports = NotifyerDBModel