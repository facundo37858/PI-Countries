const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {

    id:{
      type:DataTypes.STRING,
      primaryKey: true,
      allowNull:false

    },



    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image:{
      type:DataTypes.STRING,
      defaultValue:null
    },

    continent:{
      type:DataTypes.STRING,
      defaultValue:null
    },

    capital:{
      type:DataTypes.STRING,
      defaultValue:null
    },

    subregion:{
      type:DataTypes.STRING,
      defaultValue:null
    },

    area:{
      type:DataTypes.INTEGER,
      defaultValue:null
    },

    population:{
      type:DataTypes.INTEGER,
      defaultValue:null
    }
  },{
    timestamps: false
  });
};
