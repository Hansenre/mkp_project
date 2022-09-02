'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('estabelecimentos', {
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
      tipo: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      telefones: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ramo: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      logo: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      id_endereco:{
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false
      }

    })

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('estabelecimentos');
  }
};
