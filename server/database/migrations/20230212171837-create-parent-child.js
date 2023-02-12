'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ParentChildren', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idChild: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Children',
          key: 'id'
        },
      },
      idParent: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Parents',
          key: 'id'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ParentChildren');
  }
};