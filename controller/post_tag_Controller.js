const Post_Tag = require('../models/post_tag')


const createPost_Tag = async(req,res)=>{
    try {
        let data = await Post_Tag.create({ postId:req.body.postId, tagId:req.body.tagId});
        res.status(201).send(data)
        console.log(data)
    } catch (error) {
        console.log("error is" + error)
        res.status(400).send(error)
        
    }

}
 const getPost_Tag = async(req,res)=>{
     try {
         let datas = await Post_Tag.findAll();
         res.send(datas)
         
     } catch (error) {
         console.log(error)
     }
 }



module.exports = {getPost_Tag  ,createPost_Tag};