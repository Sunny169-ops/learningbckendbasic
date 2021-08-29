const {Sequelize,DataTypes} = require('sequelize');

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

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user')(sequelize,DataTypes);

db.sequelize.sync({force:true})
.then(()=>{
    console.log("yes re-sync")
})

module.exports = db;