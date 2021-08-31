const {Sequelize} = require('sequelize');

const sequelize = require('../config/database')

const {DataTypes} = Sequelize;

const Tag = sequelize.define('tag',{
       
    
       name:{
           type: DataTypes.STRING,
           allowNull:false

       }
    },
    {
        timestamps:false,
        freezeTableName:true
    });

    module.exports = Tag;