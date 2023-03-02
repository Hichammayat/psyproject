const PsychiatreModel = require("../modules/Psychiatreschema");

exports.postuler = async (req, res) =>{
    const psychiatre= req.body
    console.log(req.body)
 
    try{
        let result = await PsychiatreModel.findOne({Email: psychiatre.Email})
       
    if(result){
        res.send("Psychiatre already exist") }
        else{
            const newPsychiatre= new PsychiatreModel(psychiatre)
            const saved = await newPsychiatre.save()
            
            if (saved)
            res.send("Psychiatre inserted")
            else res.send("not inserted")
        }
    
    }catch(err) {console.error(err)};

   
}

exports.loginPsy = async (req, res) =>{
    let psyAccount = req.body
    try {
    let psyAccount_result = await PsychiatreModel.findOne({Email: psyAccount.Email,Password: psyAccount.Password})
    if (psyAccount_result) {
        res.send(psyAccount_result)
       

    } else {
        res.send(false)
        
    }
    }catch(err) {
        console.error(err.message)
    }
}
exports.GetPsychiatres= async (req, res) => {
    try {
        let psychiatres = await PsychiatreModel.find({});
    if (psychiatres) {
      res.send(psychiatres);
    } else {
      console.log("No psychiatres in DB");
    }
  }
        
     catch (error) {
       console.log(error) 
    }

}


exports.getCv = async (req, res) =>{
 const file = req.files.resume
 const path = `${__dirname}\\uploads\\${file.name}`
 file.mv(path, (err)=>{
       if(err){
        console.log(err)
       }else{
        console.log("file created")
       }
    })
}