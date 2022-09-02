'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('estabelecimentos_produtos',
     {
      id_estabelecimento: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false
      },
      id_produto: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false
      },
      valor: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      estoque: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    })

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('estabelecimentos_produtos');
  }
};


