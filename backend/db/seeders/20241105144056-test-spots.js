'use strict';

const { Spot } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await Spot.bulkCreate(
      [
        {
          ownerId: 1,
          address: '123 Disney Lane',
          city: 'San Francisco',
          state: 'California',
          country: 'United States of America',
          lat: 37.7635358,
          lng: 142.4730327,
          name: 'shawn',
          description: 'Place where web developers are created',
          price: 123,
          avgRating: null,
          previewImage: 'https://i.ibb.co/X5GYBpw/bungalow-house-exterior.jpg',
        },
        {
          ownerId: 2,
          address: 'empire state',
          city: 'new york',
          state: 'new york',
          country: 'United States of America',
          lat: 37.7645351,
          lng: 122.4730321,
          name: 'jamesy',
          description: 'Place where web developers are created',
          price: 123,
          avgRating: null,
          previewImage:
            'https://i.ibb.co/4txgX55/luxurious-home-in-the-desert.jpg',
        },
        {
          ownerId: 3,
          address: 'manes lane',
          city: 'deleware',
          state: 'pa',
          country: 'United States of America',
          lat: 37.7645758,
          lng: 122.4737327,
          name: 'debora',
          description: 'Place where web developers are created',
          price: 123,
          avgRating: null,
          previewImage: 'https://i.ibb.co/s5PcfWW/one-storey-home-exterior.jpg',
        },
        {
          ownerId: 4,
          address: 'staten island',
          city: 'new york',
          state: 'new york',
          country: 'United States of America',
          lat: 27.7645358,
          lng: 121.4730327,
          name: 'mark',
          description: 'Place where web developers are created',
          price: 123,
          avgRating: null,
          previewImage:
            'https://i.ibb.co/tJ1q2fw/red-brick-house-in-the-summer-surrounded-by-green-foliage.jpg',
        },
        {
          ownerId: 5,
          address: '123 Dfor five lane',
          city: 'San Francisco',
          state: 'California',
          country: 'United States of America',
          lat: 37.7845358,
          lng: 122.4739327,
          name: 'charles',
          description: 'Place where web developers are created',
          price: 123,
          avgRating: null,
          previewImage: 'https://i.ibb.co/xmvptsY/red-house-in-the-sun.jpg',
        },
        {
          ownerId: 6,
          address: 'jersey city ',
          city: 'jersey city',
          state: 'new jersey ',
          country: 'United States of America',
          lat: 37.764536,
          lng: 122.4732027,
          name: 'david',
          description: 'Place where web developers are created',
          price: 123,
          avgRating: null,
          previewImage:
            'https://i.ibb.co/CB0RB3c/yellow-door-on-brick-home.jpg',
        },
        {
          ownerId: 7,
          address: '319 fulton ave',
          city: 'jamaica',
          state: 'queens',
          country: 'United States of America',
          lat: 37.7645711,
          lng: 122.4737322,
          name: 'raymond',
          description: 'quiet and cozy',
          price: 123,
          avgRating: null,
          previewImage:
            'https://i.ibb.co/j4KB1jg/rustic-wooden-window-frame-against-exposed-brick.jpg',
        },
        {
          ownerId: 8,
          address: 'staten island',
          city: 'new york',
          state: 'new york',
          country: 'United States of America',
          lat: 27.7645358,
          lng: 121.4730327,
          name: 'mark',
          description: 'Place where web developers are created',
          price: 123,
          avgRating: null,
          previewImage: 'hhttps://i.ibb.co/ThmsbDN/house-with-garage.jpg',
        },
        {
          ownerId: 9,
          address: '123 Dfor five lane',
          city: 'San Francisco',
          state: 'California',
          country: 'United States of America',
          lat: 37.7845358,
          lng: 122.4739327,
          name: 'charles',
          description: 'Place where web developers are created',
          price: 123,
          avgRating: null,
          previewImage: 'https://i.ibb.co/wpJWRhM/waterfront-homes.jpg',
        },
        {
          ownerId: 10,
          address: 'jersey city ',
          city: 'jersey city',
          state: 'new jersey ',
          country: 'United States of America',
          lat: 37.764536,
          lng: 122.4732027,
          name: 'david',
          description: 'Place where web developers are created',
          price: 123,
          avgRating: null,
          previewImage:
            'https://i.ibb.co/fCPxk5X/wooden-cabin-in-the-wilderness-among-forest-trees.jpg',
        },
      ],
      { validate: true }
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        address: { [Op.in]: ['123 Disney Lane', 'empire state'] },
      },
      {}
    );
  },
};
