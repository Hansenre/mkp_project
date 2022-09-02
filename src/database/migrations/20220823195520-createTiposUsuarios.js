'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('tipos_usuarios', {
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
    })

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('tipos_usuarios');
  }
};
