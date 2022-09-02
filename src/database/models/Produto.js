const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Produto = sequelize.define(
    "Produto",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          nome: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          tipo: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          detalhe: {
            allowNull: false,
            type: DataTypes.INTEGER,
          },
          img: {
            allowNull: false,
            type: DataTypes.INTEGER
          },
    },
    {
      tableName: "produtos",
      timestamps: false,
    },
  );

  return Produto;
};
