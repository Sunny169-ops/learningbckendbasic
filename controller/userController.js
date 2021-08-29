var db = require('../config');
const Users = db.user;

var addUser = async(req, res)=>{
    try {
        let data = await  Users.create({firstName:req.body.firstName,lastName:req.body.lastName,email:req.body.email,password:req.body.password });
        res.status(201).send(data)
        // await data.save();
        console.log(data)
        
    } catch (error) {
            console.log(error);
            res.status(400).send(error);
        
    }
 


    // let response = {
    //     data:'ok'

    // }
   


    // res.status(200).json(response);


}

module.exports = {
    addUser
}