const AnswerModel = require("../modules/Questionnaireschema")


exports.Questionnaire= async (req, res) =>{
    const answer= req.body
    console.log(answer)
    try{
         
            const newAnswer= new AnswerModel(answer)
            const saved = await newAnswer.save()
            console.log(saved)
            if (saved)res.send(saved)
        else res.send("answers not inserted")
        

    }catch(err) {console.error(err)}}