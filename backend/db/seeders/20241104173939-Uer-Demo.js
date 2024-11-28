'use strict';

const { User } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await User.bulkCreate([
        {
            email: 'demo@user.io',
            username: 'Demo-lition',
            hashedPassword: bcrypt.hashSync('password'),
            firstName: 'Demo',
            lastName: 'User',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            email: 'other@user.io',
            username: 'testUser2',
            hashedPassword: bcrypt.hashSync('password'),
            firstName: 'test',
            lastName: 'User',
            createdAt: new Date(),
            updatedAt: new Date()
          }
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-lition'] }
    }, {});
  }
};
