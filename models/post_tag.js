const {Sequelize} = require('sequelize');

const sequelize = require('../config/database')

const {DataTypes} = Sequelize;

const post_tag = sequelize.define('post_tag ',{
       
    
       postId:{
           type: DataTypes.INTEGER,
           allowNull:false

       },
       tagId:{
        type: DataTypes.INTEGER,
        allowNull:false

    }
    },
    {
        timestamps:false,
        freezeTableName:true
    });

    module.exports = post_tag ;