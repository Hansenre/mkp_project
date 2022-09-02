const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Estabelecimento = sequelize.define(
    "Estabelecimento",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tipo: {
        allowNull: false,
        type: DataTypes.STRING,
        
      },
      telefones: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ramo: {
        allowNull: false,
        type: DataTypes.STRING,
        
      },
      logo: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      idEndereco:{
        type: Sequelize.INTEGER,
        foreignKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id_endereco'
        },
    },
    {
      tableName: "estabelecimentos",
      timestamps: false,
    },
  );

  return Estabelecimento;
};
