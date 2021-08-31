const {Sequelize} = require('sequelize');


const sequelize = new Sequelize('demo','sa','sunny',{
    'host':'localhost',
    'dialect':'mssql',
    'pool':{max:5,min:0,idle:10000}
});

sequelize.authenticate()
.then(()=>{
    console.log("connected")
})
.catch(err=>{
    console.log("error"+ err)
});

 sequelize.sync({ force: false }).then(results =>{
    console.log("sync done");

 });
    



// const db = {};
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.user = require('../modals/user')(sequelize,DataTypes);

// db.sequelize.sync({force:true})
// .then(()=>{
//     console.log("yes re-sync")
// })

module.exports = sequelize;