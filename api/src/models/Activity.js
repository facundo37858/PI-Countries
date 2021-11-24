const {DataTypes} = require('sequelize'); 

module.exports=(sequelize)=>{

    sequelize.define('activity',{
        uid:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            // type: DataTypes.INTEGER,
            // primaryKey: true,
            // autoIncrement: true,
            unique:true,
            allowNull:false


        },

        name:{
            type:DataTypes.STRING,
            allowNull:false
        },

        difficulty:{
            type:DataTypes.INTEGER,
            allowNull:false,
            defaultValue:1


        },

        duration:{
            type:DataTypes.STRING,
            allowNull:false,
            defaultValue:'not specified'


        },

        season:{
            type:DataTypes.STRING,
            allowNull:false,
            defaultValue:'not specified'
        }




    },{
        timestamps: false
    })
}