'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('parceiros', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefones: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ramo: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      imgs: {
        allowNull: false,
        type: Sequelize.STRING
      },
      logo: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }

    })

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('parceiros');
  }
};

