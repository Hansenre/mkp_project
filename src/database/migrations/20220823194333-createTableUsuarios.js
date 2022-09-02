'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('usuarios', {
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
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      img: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      id_tipo_usuario:{
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false
      }

    })

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('usuarios');
  }
};

