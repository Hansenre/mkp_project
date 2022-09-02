'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('usuarios_parceiros', {
      id_usuario: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false
      },
      id_parceiro: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false
      },
    })

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('usuarios_parceiros');
  }
};

