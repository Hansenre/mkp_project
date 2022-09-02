const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const EstabelecimentoProduto = sequelize.define(
    "EstabelecimentoProduto",
    {
        idEstabelecimento: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            field:'id_estabelecimento'
          },
          idProduto: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            field: 'id_produto'
          },
          valor: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          estoque: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    },
    {
      tableName: "estabelecimentos_produtos",
      timestamps: false,
    },
  );

  return EstabelecimentoProduto;
};
