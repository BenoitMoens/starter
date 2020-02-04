'use strict';
const Sequelize = require('sequelize');
var db = require('../database/index');
var sequelize = db.sequelize;

const Client = sequelize.define("clients",{
    id : {
      type : Sequelize.INTEGER(11),
      allowNull : false,
      autoIncrement : true,
      primaryKey : true
    },
    firstname :  {
      type : Sequelize.STRING(30),
      allowNull : false
    },
    lastname :  Sequelize.STRING(30),
    email :  Sequelize.STRING(30),
    createdAt : {
     type : Sequelize.DATE,
     defaultValue: Sequelize.NOW
   },
    updateAt: {
     type : Sequelize.DATE,
     defaultValue: Sequelize.NOW
   }
  },
  {
    timestamps: false
  }
);

// associations
Client.associate = models => {
 Client.belongsTo(models.User);
};

module.exports = Client;
