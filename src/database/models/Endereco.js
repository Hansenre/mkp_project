const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Endereco = sequelize.define(
    "Endereco",
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      idEstabelecimento: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        autoIncrement: true,
        allowNull: false,
        field:'id_estabelecimento'
      },
      idParceiro: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id_parceiro'
      },
      idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id_usuario'
      },
      rua: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bairro: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      numero: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cep: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },

      
    },
    {
      tableName: "enderecos",
      timestamps: false,
    },
  );

  return Endereco;
};
