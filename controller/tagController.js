const Tag = require('../models/tag')


const createTag = async(req,res)=>{
    try {
        let data = await Tag.create({name:req.body.name});
        res.status(201).send(data)
        console.log(data)
    } catch (error) {
        console.log("error is" + error)
        res.status(400).send(error)
        
    }

}
 const getTag = async(req,res)=>{
     try {
         let datas = await Tag.findAll();
         res.send(datas)
         
     } catch (error) {
         console.log(error)
     }
 }



module.exports = {getTag ,createTag};




