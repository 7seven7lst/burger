'use strict';


var customDataTypes = require('../db/sequelize-mysql-timestamp');
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'burgers',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        burger_name : {
          type: Sequelize.STRING,
          allowNull: false,
        },
        devoured: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
          allowNull: false,
        },
        date: {
          type: customDataTypes.TIMESTAMP,
          allowNull: false,
        },
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('burgers');
  }
};
