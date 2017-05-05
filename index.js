var _ = require('lodash');
var Burger = require('./models/burger.js');
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Static directory
app.use(express.static("./dist"));

app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname, './dist/index.html'));
})

console.log(Burger);
Burger.selectAll()
.then(function(data){
  //let postAsJSON = serializer.serialize(data);
  
  console.log(data);
})

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


