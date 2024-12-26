'use strict';

const { SpotImage, Spot } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

//allow avgRating to be updated with seeder
async function updateAllSpotPreviews() {
  const spots = await Spot.findAll({
    where: {id: 1}
  });
  /*
  for (let spot of spots) {
    await spot.assignPreview();
  }
    */
  console.log('All spot ratings updated');
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await SpotImage.bulkCreate([
        {
          spotId: 1,
          url: 'https://i.ibb.co/WnFbjJB/villa-1.jpg',
          preview:true
        },

        {
          spotId: 2,
          url: 'https://i.ibb.co/4txgX55/luxurious-home-in-the-desert.jpg',
          preview:true
        },

        {
          spotId: 3,
          url: 'https://i.ibb.co/s5PcfWW/one-storey-home-exterior.jpg',
          preview:true
        },
        {
          spotId: 4,
          url: 'https://i.ibb.co/tJ1q2fw/red-brick-house-in-the-summer-surrounded-by-green-foliage.jpg',
          preview: true
        },
        {
          spotId: 5,
          url: 'https://i.ibb.co/CB0RB3c/yellow-door-on-brick-home.jpg',
          preview:true
        },
        {
          spotId: 6,
          url: 'https://i.ibb.co/j4KB1jg/rustic-wooden-window-frame-against-exposed-brick.jpg',
          preview:true
        }

    ], { validate: true });

    await updateAllSpotPreviews()
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1] }
    }, {});

    await updateAllSpotPreviews()
  }
};
