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

  });

  app.post('/api/update/burger', (req, res) => {

  });
  // If no matching route is found default to home
  app.use((req, res) => {
    res.redirect('/');
  });
}
