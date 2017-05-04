'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('burgers',[
      {
        burger_name: 'Big Mac',
        devoured: false,
        date: `2017-05-03 21:00:34`,
      },
      {
        burger_name: 'Whopper',
        devoured: false,
        date: `2017-05-03 21:00:35`,
      },
      {
        burger_name: 'Double Cheese Burger',
        devoured: false,
        date: `2017-05-03 21:00:36`,
      }
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('burgers', 
      { burger_name: 
        {
          $in: 
          [
            'Big Mac',
            'Whopper',
            'Double Cheese Burger'
          ]
        }
      }, 
      {}, 
      {primaryKeys:[],primaryKeyAttributes:[]}
    );
  }
};
