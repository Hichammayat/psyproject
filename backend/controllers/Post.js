const PostModel = require("../modules/Post")

exports.newPost= async (req, res) =>{
    const blog= req.body
    console.log(blog)
    try{
         
            const newBlog= new PostModel(blog)
            const saved = await newBlog.save()
            console.log(saved)
            if (saved)res.send(saved)
        else res.send("post not inserted")
        

    }catch(err) {console.error(err)}}

exports.displayPost= async(req,res)=>{
    const id =req.params.psychiatre_id
    try{
    const BlogPsyid = await PostModel.find({psychiatre_id : id})
    console.log(BlogPsyid)
        res.send(BlogPsyid)
    }catch(err){console.log(err.message)}

    
}