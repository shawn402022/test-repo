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
        "avgRating": null,
        "previewImage": "https://i.ibb.co/X5GYBpw/bungalow-house-exterior.jpg",
        "image1": "https://i.ibb.co/T2FhW0R/perfect-morning-patio.jpg",
        "image2": "https://i.ibb.co/CzCg12J/person-reading-next-to-a-puppy-on-a-wool-blanket.jpg",
        "image3": "https://i.ibb.co/RSpjwR0/photo-of-a-desk-and-white-corner-seating-area.jpg",
        "image4": "https://i.ibb.co/ftWsYSY/red-brick-home-with-snow-shovel-by-the-entrance.jpg"
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
        "avgRating": null,
        "previewImage": "https://i.ibb.co/4txgX55/luxurious-home-in-the-desert.jpg",
        "image1": "https://i.ibb.co/WKLg4Nx/sarah-kitchen-supplies-red-adjusted.jpg",
        "image2": "https://i.ibb.co/PDkSM1s/small-bedroom-with-shelving.jpg",
        "image3": "https://i.ibb.co/Rgp3ZZm/spectacles-on-book.jpg",
        "image4": "https://i.ibb.co/ygGxjbX/stacks-of-pillows-and-blankets.jpg"
      },
      {
        "ownerId": 3,
        "address": "manes lane",
        "city": "deleware",
        "state": "pa",
        "country": "United States of America",
        "lat": 37.7645758,
        "lng": 122.4737327,
        "name": "debora",
        "description": "Place where web developers are created",
        "price": 123,
        "avgRating": null,
        "previewImage": "https://i.ibb.co/s5PcfWW/one-storey-home-exterior.jpg",
        "image1": "https://i.ibb.co/c6p2kjv/sunny-room-with-couch.jpg",
        "image2": "https://i.ibb.co/HGzqx4M/wooden-shelf-with-knick-knacks.jpg",
        "image3": "https://i.ibb.co/9Ws7PFJ/yellow-pillow-bedside-table.jpg",
        "image4": "https://i.ibb.co/MMHfHh9/birds-inside.jpg"
      },
      {
        "ownerId": 4,
        "address": "staten island",
        "city": "new york",
        "state": "new york",
        "country": "United States of America",
        "lat": 27.7645358,
        "lng": 121.4730327,
        "name": "mark",
        "description": "Place where web developers are created",
        "price": 123,
        "avgRating": null,
        "previewImage": "https://i.ibb.co/tJ1q2fw/red-brick-house-in-the-summer-surrounded-by-green-foliage.jpg",
        "image1": "https://i.ibb.co/Xyxghfm/breakfast-in-bed-for-loved-one.jpg",
        "image2": "https://i.ibb.co/cvg6dQ4/bright-hotel-room-bed.jpg",
        "image3": "https://i.ibb.co/G310TfQ/brightly-lit-room-with-piano.jpg",
        "image4": "https://i.ibb.co/DGG12f5/desk-sits-by-the-window-in-a-home-office.jpg"
      },
      {
        "ownerId": 5,
        "address": "123 Dfor five lane",
        "city": "San Francisco",
        "state": "California",
        "country": "United States of America",
        "lat": 37.7845358,
        "lng": 122.4739327,
        "name": "charles",
        "description": "Place where web developers are created",
        "price": 123,
        "avgRating": null,
        "previewImage": "https://i.ibb.co/xmvptsY/red-house-in-the-sun.jpg",
        "image1": "https://ibb.co/ZKLjnfs",
        "image2": "https://ibb.co/t3C9sqk",
        "image3": "https://ibb.co/VgMYCQg",
        "image4": "https://ibb.co/cbbynhD"
      },
      {
        "ownerId": 6,
        "address": "jersey city ",
        "city": "jersey city" ,
        "state": "new jersey ",
        "country": "United States of America",
        "lat": 37.7645360,
        "lng": 122.4732027,
        "name": "david",
        "description": "Place where web developers are created",
        "price": 123,
        "avgRating": null,
        "previewImage": "https://i.ibb.co/CB0RB3c/yellow-door-on-brick-home.jpg",
        "image1": "https://i.ibb.co/DGG12f5/desk-sits-by-the-window-in-a-home-office.jpg",
        "image2": "https://i.ibb.co/0KwwWVQ/dinner-party.jpg",
        "image3": "https://i.ibb.co/mJVvfGJ/gray-and-white-tiled-shower.jpg",
        "image4": "https://i.ibb.co/HFZcx41/hotel-room-bed-1.jpg"
      },
      {
        "ownerId": 7,
        "address": "319 fulton ave",
        "city": "jamaica",
        "state": "queens",
        "country": "United States of America",
        "lat": 37.7645711,
        "lng": 122.4737322,
        "name": "raymond",
        "description": "quiet and cozy",
        "price": 123,
        "avgRating": null,
        "previewImage": "https://i.ibb.co/j4KB1jg/rustic-wooden-window-frame-against-exposed-brick.jpg",
        "image1": "https://i.ibb.co/QMKhp4H/house-plant-enjoys-natural-light.jpg",
        "image2": "https://i.ibb.co/rbWDpjX/laptop-on-a-the-white-desk-of-a-home-office.jpg",
        "image3": "https://i.ibb.co/Pz8HW9m/large-grey-sofa-by-brick-wall.jpg",
        "image4": "https://i.ibb.co/jhBmrDx/leather-seat-stool.jpg"
      },
      {
        "ownerId": 8,
        "address": "staten island",
        "city": "new york",
        "state": "new york",
        "country": "United States of America",
        "lat": 27.7645358,
        "lng": 121.4730327,
        "name": "mark",
        "description": "Place where web developers are created",
        "price": 123,
        "avgRating": null,
        "previewImage": "hhttps://i.ibb.co/ThmsbDN/house-with-garage.jpg",
        "image1": "https://i.ibb.co/8xpXNnD/living-room-brick-wall.jpg",
        "image2": "https://i.ibb.co/sPyTjZP/livingroom-rainbows.jpg",
        "image3": "https://i.ibb.co/3SY2YrB/loftstyle-bedroom-with-throw-pillows.jpg",
        "image4": "https://i.ibb.co/3SY2YrB/loftstyle-bedroom-with-throw-pillows.jpg"
      },
      {
        "ownerId": 9,
        "address": "123 Dfor five lane",
        "city": "San Francisco",
        "state": "California",
        "country": "United States of America",
        "lat": 37.7845358,
        "lng": 122.4739327,
        "name": "charles",
        "description": "Place where web developers are created",
        "price": 123,
        "avgRating": null,
        "previewImage": "https://i.ibb.co/wpJWRhM/waterfront-homes.jpg",
        "image1": "https://i.ibb.co/3SY2YrB/loftstyle-bedroom-with-throw-pillows.jpg",
        "image2": "https://i.ibb.co/93LxtSM/modern-updated-kitchen-interior-home.jpg",
        "image3": "https://i.ibb.co/P54bRh2/modern-white-bathroom.jpg",
        "image4": "https://i.ibb.co/5sVrfhJ/natural-white-sofa-on-wood-frame.jpg"
      },
      {
        "ownerId": 10,
        "address": "jersey city ",
        "city": "jersey city" ,
        "state": "new jersey ",
        "country": "United States of America",
        "lat": 37.7645360,
        "lng": 122.4732027,
        "name": "david",
        "description": "Place where web developers are created",
        "price": 123,
        "avgRating": null,
        "previewImage": "https://i.ibb.co/fCPxk5X/wooden-cabin-in-the-wilderness-among-forest-trees.jpg",
        "image1": "https://i.ibb.co/vBzDZm5/not-boring-beige.jpg",
        "image2": "https://i.ibb.co/pLP6jqq/old-new-living-space.jpg",
        "image3": "https://i.ibb.co/L8grjrj/paper-cranes-and-open-doors.jpg",
        "image4": "https://i.ibb.co/x59vknr/patio-chair-on-balcony.jpg"

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
