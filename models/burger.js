'use strict';
const Sequelize = require("sequelize");
const _ = require('lodash');
// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection.js");
const customDataTypes = require('../db/sequelize-mysql-timestamp.js');

let Burger = sequelize.define('burger', {
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
  }
}, 
{
  timestamps: false,
  // Creating a custom method for our User model. This will check if an unhashed password entered by
  // The user can be compared to the hashed password stored in our database
  classMethods: {
    selectAll: function() {
      return this.findAll({})
      .then(data => _.map(data, d => d.toJSON()))
    },
    insertOne: function(newBurger) {
      return this.build(newBurger).save()
      .then(dbNewBurger => {
        console.log("burger has been inserted");
        return dbNewBurger.toJSON();
      })
      .catch(error => {
        console.log("error inserting burger");
      })
    },
    updateOne: function(query, updatedBurger) {
      return this.update(updatedBurger, {
        where: query
      })
      .then(dbUpdatedBurger => {
        console.log("burger has been updated");
        return dbUpdatedBurger.toJSON();
      })
      .catch(error => {
        console.log("error updating burger");
      })
    }
  },
});

Burger.sync();

module.exports = Burger;
