const {DataTypes} = require('sequelize'); 

module.exports=(sequelize)=>{

    sequelize.define('activity',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
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