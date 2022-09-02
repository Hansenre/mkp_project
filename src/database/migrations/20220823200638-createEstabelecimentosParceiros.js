'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('estabelecimentos_parceiros', {
      id_estabelecimento: {
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
    return queryInterface.dropTable('estabelecimentos_parceiros');
  }
};
