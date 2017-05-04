var Sequelize = require("sequelize");
var _ = require('lodash');
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");
var customDataTypes = require('../db/sequelize-mysql-timestamp.js');

var Burger = sequelize.define('burger', {
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
      .then(data => _.map(data, d=>d.toJSON()))
    },
    insertOne: function(newBurger) {
      return this.build(newBurger).save()
      .then(response=>{
        console.log("burger has been inserted");
      })
      .catch(error=>{
        console.log("error inserting burger");
      })
    },
    updateOne: function(id, updatedBurger) {
      return this.findOne({where: {id:id}})
      .then(burger=>burger.updateAttributes(updatedBurger))
      .then(response=>{
        console.log("burger has been updated");
      })
      .catch(error=>{
        console.log("error updating burger");
      })
    }
  },
});

Burger.sync();

module.exports = Burger;
