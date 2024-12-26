'use strict';

const { ReviewImages } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await ReviewImages.bulkCreate([
      {
        reviewId: 1,
        url: "https://i.ibb.co/X5GYBpw/bungalow-house-exterior.jpg"
      },
      {
        reviewId: 2,
        url: "https://i.ibb.co/4txgX55/luxurious-home-in-the-desert.jpg"
      }
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'ReviewImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      reviewId: { [Op.in]: [2,1] }
    }, {});
  }
};
