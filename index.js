var _ = require('lodash');
var Burger = require('./models/burger.js');
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

Burger.updateOne(4, {
  id: 4,
  burger_name: 'Teriyaki Beef Burger',
  devoured: false,
  date: `2017-05-03 22:00:34`,
})

