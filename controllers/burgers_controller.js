'use strict';
const path = require('path');
let db = require("../models");
console.log("db.burger is>>>>", db.burger);

module.exports = app => {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });

  app.get('/api/all', (req, res) => {
    db.burger.selectAll()
    .then(data => res.json(data))
  })

  app.post('/api/add/burger', (req, res) => {
    const newBurger = {
      burger_name: req.body.burger_name, 
      devoured: req.body.devoured, 
      date: req.body.date,
    };
    db.burger.insertOne(newBurger)
    .then(dbNewBurger=>{
      res.json(dbNewBurger);
    })
  });

  app.post('/api/update/burger/:id', (req, res) => {
    const id = req.params.id;
    const updatedBurger = {
      id: id,
      burger_name: req.body.burger_name, 
      devoured: true,
      date: req.body.date,
    }
    db.burger.updateOne({id:id}, {devoured: true})
    .then(response=>{
      db.burger.findOne({where: {id:id} })
      .then(response=>{
        res.json(response.toJSON());
      })
    });
  });
  // If no matching route is found default to home
  app.use((req, res) => {
    res.redirect('/');
  });
}
