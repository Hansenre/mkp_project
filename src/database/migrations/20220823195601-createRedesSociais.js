'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('redes_sociais', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_estabelecimento: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
      id_parceiro: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false
      },
      link: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    })

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('redes_sociais');
  }
};

