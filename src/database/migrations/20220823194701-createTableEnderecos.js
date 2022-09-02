'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('enderecos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
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
      id_usuario: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false
      },
      rua: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bairro: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      numero: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cep: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },

    })

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('enderecos');
  }
};

