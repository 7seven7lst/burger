'use strict';
const _ = require('lodash');
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const PORT = process.env.PORT || 8080;
let Burger = require('./models/burger.js');
// Sets up the Express App
// =============================================================
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Static directory
app.use(express.static("./dist"));
require("./controllers/burgers_controller.js")(app);

/*
console.log(Burger);
Burger.selectAll()
.then(function(data){
  //let postAsJSON = serializer.serialize(data);
  
  console.log(data);
})
*/

/*
Burger.insertOne({
  burger_name: 'Teriyaki Beef Burger',
  devoured: false,
  date: `2017-05-03 22:00:34`,
})
*/

/*
Burger.updateOne({id:6}, {
  burger_name: 'Teriyaki Beef Burger',
  devoured: false,
});
*/

app.listen(PORT, () => {
  console.log('Example app listening on port 8080!')
});


