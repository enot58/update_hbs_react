'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    return Promise.all([
        queryInterface.addColumn('Users','userDescriptionId', {
          type:Sequelize.INTEGER,
          allowNull: true
        }).then(() => {
          queryInterface.addConstraint('Users', {
            fields: ['userDescriptionId'],
            type: "foreign key",
            name: 'add_user_role',
            references: {
              table: 'Users',
              field: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: "CASCADE",
          })
        })
    ])

    /*return queryInterface.addColumn('Users', 'roleId', {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: "userdescription",
        field: "id"
      },
      onUpdate: 'CASCADE',
      onDelete: "CASCADE",
      allowNull: false
    })*/
    /*return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Users', 'roleId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: "userdescription",
            field: "id"
          },
          onUpdate: 'CASCADE',
          onDelete: "CASCADE",
          allowNull: false
        }, {transaction: t})
      ])
    })*/

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    /*return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Users', 'roleId', {transaction: t})
      ])
    })*/
    return Promise.all([
      queryInterface.removeColumn('Users','userDescriptionId', {
        type:Sequelize.INTEGER,
        allowNull: true
      }).then(() => {
        queryInterface.removeConstraint('Users', {
          fields: ['userDescriptionId'],
          type: "foreign key",
          name: 'add_user_role',
          references: {
            table: 'Users',
            field: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: "CASCADE",
        })
      })
    ])
  }
};
