'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('usuarios_estabelecimentos', {
      id_estabelecimento: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false
      },
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('usuarios_estabelecimentos');
  }
};

