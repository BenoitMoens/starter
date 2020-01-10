'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("client",{
      id : {
        type : Sequelize.INTEGER(11),
        allowNull : false,
        autoIcrement : true,
        primaryKey : true
      },
      firstname :  {
        type : Sequelize.STRING(30),
        allowNull : false
      },
      lastname :  Sequelize.STRING(30),
      email :  Sequelize.STRING(30),
      createdAt : Sequelize.DATE,
      updateAt : Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("client");
  }
};