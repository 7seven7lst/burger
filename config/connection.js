// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************
// Dependencies
'use strict';
const Sequelize = require("sequelize");
// Creates mySQL connection using Sequelize
let sequelize = new Sequelize("burgers_db", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
// Exports the connection for other files to use
module.exports = sequelize;
