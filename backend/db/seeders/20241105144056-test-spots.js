'use strict';

const { Spot } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await Spot.bulkCreate([
      {
        "ownerId": 1,
        "address": "123 Disney Lane",
        "city": "San Francisco",
        "state": "California",
        "country": "United States of America",
        "lat": 37.7635358,
        "lng": 142.4730327,
        "name": "shawn",
        "description": "Place where web developers are created",
        "price": 123,
      },
      {
        "ownerId": 2,
        "address": "empire state",
        "city": "new york",
        "state": "new york",
        "country": "United States of America",
        "lat": 37.7645351,
        "lng": 122.4730321,
        "name": "jamesy",
        "description": "Place where web developers are created",
        "price": 123,
      },
      {
        "ownerId": 1,
        "address": "manes lane",
        "city": "deleware",
        "state": "pa",
        "country": "United States of America",
        "lat": 37.7645758,
        "lng": 122.4737327,
        "name": "debora",
        "description": "Place where web developers are created",
        "price": 123,
      },
      {
        "ownerId": 1,
        "address": "staten island",
        "city": "new york",
        "state": "new york",
        "country": "United States of America",
        "lat": 27.7645358,
        "lng": 121.4730327,
        "name": "mark",
        "description": "Place where web developers are created",
        "price": 123,
      },
      {
        "ownerId": 1,
        "address": "123 Dfor five lane",
        "city": "San Francisco",
        "state": "California",
        "country": "United States of America",
        "lat": 37.7845358,
        "lng": 122.4739327,
        "name": "charles",
        "description": "Place where web developers are created",
        "price": 123,
      },
      {
        "ownerId": 1,
        "address": "jersey city ",
        "city": "jersey city" ,
        "state": "new jersey ",
        "country": "United States of America",
        "lat": 37.7645360,
        "lng": 122.4732027,
        "name": "david",
        "description": "Place where web developers are created",
        "price": 123,
      }
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      address: { [Op.in]: ['123 Disney Lane',"empire state"] }
    }, {});
  }
};
