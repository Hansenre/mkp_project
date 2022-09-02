const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Usuario = sequelize.define(
    "Usuario",
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
          telefones: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          cpf: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          img: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          idTipoUsuario:{
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false,
            field: 'id_tipo_usuario',
          }

    },
    {
      tableName: "usuarios",
      timestamps: false,
    },
  );

  return Usuario;
};
