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
  burger_name: 'Veggie Burgers',
  devoured: false,
  date: `2017-05-04 22:00:34`,
})
.then(response=> {
  console.log("inserted response is>>>>", response);
})
*/

/*
Burger.updateOne({id:6}, {
  burger_name: 'Teriyaki Chicken Burger',
  devoured: false,
})
.then(response=>{
  console.log("updated response is >>>>", response);
})
*/

app.listen(PORT, () => {
  console.log('Example app listening on port 8080!')
});


