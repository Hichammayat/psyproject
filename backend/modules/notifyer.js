const {mongoose } = require('mongoose')
const db = require('mongoose')

const NotifyerModel = db.Schema({
    notif_from_user : {
        type: String,
        ref: 'users',
        required: true
    },
    notif_to_psychiatre : {
        type: String,
        ref: 'psychiatres',
        required: true
    },
    
})


const NotifyerDBModel = mongoose.model('notifications', NotifyerModel)

module.exports = NotifyerDBModel