'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    return queryInterface.bulkInsert(options, [
      // Spot 1 images
      {
        spotId: 1,
        url: 'https://i.ibb.co/X5GYBpw/bungalow-house-exterior.jpg',
        preview: true,
      },
      {
        spotId: 1,
        url: 'https://i.ibb.co/T2FhW0R/perfect-morning-patio.jpg',
        preview: false,
      },
      {
        spotId: 1,
        url: 'https://i.ibb.co/CzCg12J/person-reading-next-to-a-puppy-on-a-wool-blanket.jpg',
        preview: false,
      },
      {
        spotId: 1,
        url: 'https://i.ibb.co/RSpjwR0/photo-of-a-desk-and-white-corner-seating-area.jpg',
        preview: false,
      },
      {
        spotId: 1,
        url: 'https://i.ibb.co/ftWsYSY/red-brick-home-with-snow-shovel-by-the-entrance.jpg',
        preview: false,
      },
      // Spot 2 images
      {
        spotId: 2,
        url: 'https://i.ibb.co/4txgX55/luxurious-home-in-the-desert.jpg',
        preview: true,
      },
      {
        spotId: 2,
        url: 'https://i.ibb.co/WKLg4Nx/sarah-kitchen-supplies-red-adjusted.jpg',
        preview: false,
      },
      {
        spotId: 2,
        url: 'https://i.ibb.co/PDkSM1s/small-bedroom-with-shelving.jpg',
        preview: false,
      },
      {
        spotId: 2,
        url: 'https://i.ibb.co/Rgp3ZZm/spectacles-on-book.jpg',
        preview: false,
      },
      {
        spotId: 2,
        url: 'https://i.ibb.co/ygGxjbX/stacks-of-pillows-and-blankets.jpg',
        preview: false,
      },
      // Spot 3 images
      {
        spotId: 3,
        url: 'https://i.ibb.co/s5PcfWW/one-storey-home-exterior.jpg',
        preview: true,
      },
      {
        spotId: 3,
        url: 'https://i.ibb.co/c6p2kjv/sunny-room-with-couch.jpg',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://i.ibb.co/HGzqx4M/wooden-shelf-with-knick-knacks.jpg',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://i.ibb.co/9Ws7PFJ/yellow-pillow-bedside-table.jpg',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://i.ibb.co/MMHfHh9/birds-inside.jpg',
        preview: false,
      },
      // Continue for spots 4-10 with the same pattern
      // Spot 4
      {
        spotId: 4,
        url: 'https://i.ibb.co/tJ1q2fw/red-brick-house-in-the-summer-surrounded-by-green-foliage.jpg',
        preview: true,
      },
      {
        spotId: 4,
        url: 'https://i.ibb.co/Xyxghfm/breakfast-in-bed-for-loved-one.jpg',
        preview: false,
      },
      {
        spotId: 4,
        url: 'https://i.ibb.co/cvg6dQ4/bright-hotel-room-bed.jpg',
        preview: false,
      },
      {
        spotId: 4,
        url: 'https://i.ibb.co/G310TfQ/brightly-lit-room-with-piano.jpg',
        preview: false,
      },
      {
        spotId: 4,
        url: 'https://i.ibb.co/DGG12f5/desk-sits-by-the-window-in-a-home-office.jpg',
        preview: false,
      },
      // Add remaining spots 5-10 following the same pattern
      // Spot 5 images
      {
        spotId: 5,
        url: 'https://i.ibb.co/xmvptsY/red-house-in-the-sun.jpg',
        preview: true,
      },
      {
        spotId: 5,
        url: 'https://i.ibb.co/ZKLjnfs/image-name.jpg',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://i.ibb.co/t3C9sqk/image-name.jpg',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://i.ibb.co/VgMYCQg/image-name.jpg',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://i.ibb.co/cbbynhD/image-name.jpg',
        preview: false,
      },
      // Spot 6 images
      {
        spotId: 6,
        url: 'https://i.ibb.co/CB0RB3c/yellow-door-on-brick-home.jpg',
        preview: true,
      },
      {
        spotId: 6,
        url: 'https://i.ibb.co/DGG12f5/desk-sits-by-the-window-in-a-home-office.jpg',
        preview: false,
      },
      {
        spotId: 6,
        url: 'https://i.ibb.co/0KwwWVQ/dinner-party.jpg',
        preview: false,
      },
      {
        spotId: 6,
        url: 'https://i.ibb.co/mJVvfGJ/gray-and-white-tiled-shower.jpg',
        preview: false,
      },
      {
        spotId: 6,
        url: 'https://i.ibb.co/HFZcx41/hotel-room-bed-1.jpg',
        preview: false,
      },
      // Spot 7 images
      {
        spotId: 7,
        url: 'https://i.ibb.co/j4KB1jg/rustic-wooden-window-frame-against-exposed-brick.jpg',
        preview: true,
      },
      {
        spotId: 7,
        url: 'https://i.ibb.co/QMKhp4H/house-plant-enjoys-natural-light.jpg',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://i.ibb.co/rbWDpjX/laptop-on-a-the-white-desk-of-a-home-office.jpg',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://i.ibb.co/Pz8HW9m/large-grey-sofa-by-brick-wall.jpg',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://i.ibb.co/jhBmrDx/leather-seat-stool.jpg',
        preview: false,
      },
      // Spot 8 images
      {
        spotId: 8,
        url: 'https://i.ibb.co/ThmsbDN/house-with-garage.jpg',
        preview: true,
      },
      {
        spotId: 8,
        url: 'https://i.ibb.co/8xpXNnD/living-room-brick-wall.jpg',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://i.ibb.co/sPyTjZP/livingroom-rainbows.jpg',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://i.ibb.co/3SY2YrB/loftstyle-bedroom-with-throw-pillows.jpg',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://i.ibb.co/3SY2YrB/loftstyle-bedroom-with-throw-pillows.jpg',
        preview: false,
      },
      // Spot 9 images
      {
        spotId: 9,
        url: 'https://i.ibb.co/wpJWRhM/waterfront-homes.jpg',
        preview: true,
      },
      {
        spotId: 9,
        url: 'https://i.ibb.co/3SY2YrB/loftstyle-bedroom-with-throw-pillows.jpg',
        preview: false,
      },
      {
        spotId: 9,
        url: 'https://i.ibb.co/93LxtSM/modern-updated-kitchen-interior-home.jpg',
        preview: false,
      },
      {
        spotId: 9,
        url: 'https://i.ibb.co/P54bRh2/modern-white-bathroom.jpg',
        preview: false,
      },
      {
        spotId: 9,
        url: 'https://i.ibb.co/5sVrfhJ/natural-white-sofa-on-wood-frame.jpg',
        preview: false,
      },
      // Spot 10 images
      {
        spotId: 10,
        url: 'https://i.ibb.co/fCPxk5X/wooden-cabin-in-the-wilderness-among-forest-trees.jpg',
        preview: true,
      },
      {
        spotId: 10,
        url: 'https://i.ibb.co/vBzDZm5/not-boring-beige.jpg',
        preview: false,
      },
      {
        spotId: 10,
        url: 'https://i.ibb.co/pLP6jqq/old-new-living-space.jpg',
        preview: false,
      },
      {
        spotId: 10,
        url: 'https://i.ibb.co/L8grjrj/paper-cranes-and-open-doors.jpg',
        preview: false,
      },
      {
        spotId: 10,
        url: 'https://i.ibb.co/x59vknr/patio-chair-on-balcony.jpg',
        preview: false,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    return queryInterface.bulkDelete(options);
  },
};
