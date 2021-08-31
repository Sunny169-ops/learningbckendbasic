const {Sequelize} = require('sequelize');

const sequelize = require('../config/database')

const {DataTypes} = Sequelize;

const Post = sequelize.define('post',{
       user_id:{
           type: DataTypes.INTEGER,
           allowNull:false,
          
       },

       title:{
           type: DataTypes.STRING,
           allowNull:false,
       },
       
       
       content:{
           type: DataTypes.STRING,
           allowNull:false

       }
    },
    {
        timestamps:false,
        freezeTableName:true
    });

    module.exports = Post;