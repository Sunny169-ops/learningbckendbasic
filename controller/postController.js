const Posts = require('../models/post')
const Users = require('../models/user')
const Tag = require('../models/tag')
const Post_tag = require('../models/post_tag')

// <--------one-to-one/many-------->
// Posts.belongsTo(Users, {foreignKey:'user_id'});

// <-------------many-to-many---------------->

Posts.belongsToMany(Tag, {through:'Post_tag'});







const createPost = async(req,res)=>{
    try {
        let data = await Posts.create({user_id:req.body.user_id,title:req.body.title,content:req.body.content});
        res.status(201).send(data)
        console.log(data)
    } catch (error) {
        console.log("error is" +error)
        res.status(400).send(error)
        
    }

}
 const getPost = async(req,res)=>{
     try {
         let datas = await Posts.findAll({
             include:Tag
         });
         res.send(datas)
         
     } catch (error) {
         console.log(error)
     }
 }



module.exports = {createPost,getPost};




