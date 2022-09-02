'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('estabelecimentos', [
      {
        nome: "xxxxxx",
        tipo: "xxxxxx",
        telefones: "xxx",
        ramo: "xxxxxx",
        logo: "xxxxxx"
  },
])
},


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('estabelecimentos', null, {});
  }
};
