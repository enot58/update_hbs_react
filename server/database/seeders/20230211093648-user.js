'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Roman',
      lastName: 'Kiselyov',
      email: "admin@admin.ru",
      home: "sdfsdf",
      createdAt: new Date(),
      updatedAt: new Date(),
      userDescriptionId: 1
    },{
      firstName: 'Roman_Two',
      lastName: 'Kiselyov_Two',
      email: "admin@admin_two.ru",
      home: "sdgg",
      createdAt: new Date(),
      updatedAt: new Date(),
      userDescriptionId: 2
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', [{}])
  }
};
