'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('produtos', {
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
        type: Sequelize.STRING,
        allowNull: false,
      },
      detalhe: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      img: {
        allowNull: false,
        type: Sequelize.INTEGER
      },

    })

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('produtos');
  }
};

