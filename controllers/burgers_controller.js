'use strict';
const path = require('path');
let Burger = require('../models/burger.js');

module.exports = app => {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });

  app.get('/api/all', (req, res) => {
    Burger.selectAll()
    .then(data => res.json(data))
  })

  app.post('/api/add/burger', (req, res) => {
    const newBurger = {
      burger_name: req.body.burger_name, 
      devoured: req.body.devoured, 
      date: req.body.date,
    };
    Burger.insertOne(newBurger)
    .then(dbNewBurger=>{
      res.json(dbNewBurger);
    })
  });

  app.post('/api/update/burger/:id', (req, res) => {
    const id = req.params.id;
    console.log("id is >>>>", id);
    const updatedBurger = {
      id: id,
      burger_name: req.body.burger_name, 
      devoured: true,
      date: req.body.date,
    }
    Burger.updateOne({id:id}, {devoured: true})
    .then(response=>{
      Burger.findOne({where: {id:id} })
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
