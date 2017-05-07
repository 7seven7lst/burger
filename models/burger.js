'use strict';
const _ = require('lodash');
const Promise = require('bluebird');
// sequelize (lowercase) references our connection to the DB.
const customDataTypes = require('../db/sequelize-mysql-timestamp.js');

module.exports = (sequelize, DataTypes) => {
  let Burger = sequelize.define('burger', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    burger_name : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    devoured: {
      type: DataTypes.BOOLEAN,
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
        return Promise.resolve(this.update(updatedBurger, {
          where: query
        }))
        .then(dbUpdatedBurger => {
          console.log("burger has been updated");
          console.log("dbUpdatedBurger is >>> ", dbUpdatedBurger);
          return dbUpdatedBurger.toJSON();
        })
        .catch(error=>{
          console.log("error updating burger");
        })
      }
    },
  });
  return Burger;
}
