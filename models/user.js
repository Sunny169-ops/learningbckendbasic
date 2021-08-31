const {Sequelize} = require('sequelize');

const sequelize = require('../config/database')

const {DataTypes} = Sequelize;

const User = sequelize.define('user',{
  

       firstName:{
           type: DataTypes.STRING,
           allowNull:false,
       },
       
       
       lastName:{
           type: DataTypes.STRING,
           allowNull:false

       },

       email: {
           type: DataTypes.STRING,
           allowNull:false
       },

       
       password:{
           type: DataTypes.STRING,
           allowNull:false
       }
    },
    {
        timestamps:false,
        freezeTableName:true
    });

    module.exports = User;
