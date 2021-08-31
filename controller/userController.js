const Users = require('../models/user')
const Posts = require('../models/post');

// <----------one-to-one------------------>
// Users.hasOne(Posts, {foreignKey:'user_id'});

// <----------one-to-many------------------>
Users.hasMany(Posts, {foreignKey:'user_id'});

// <----------one-to-one------------------>





const createUser = async(req,res)=>{
    try {
        let data = await Users.create({firstName:req.body.firstName,lastName:req.body.lastName,email:req.body.email,password:req.body.password});
        res.status(201).send(data)
        console.log(data)
    } catch (error) {
        console.log("error is" +error)
        res.status(400).send(error)
        
    }

}
 const getUser = async(req,res)=>{
     try {
         let datas = await Users.findAll({
             include:Posts
         });
         res.send(datas)
         
     } catch (error) {
         console.log(error)
     }
 }



module.exports = {createUser,getUser};




