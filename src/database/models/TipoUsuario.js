const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const TipoUsuario = sequelize.define(
    "TipoUsuario",
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
    },
    {
      tableName: "tipos_usuarios",
      timestamps: false,
    }
  );

  return TipoUsuario;
};
