const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const UsuarioParceiro = sequelize.define(
    "UsuarioParceiro",
    {
        idUsuario: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false,
            field: "id_usuario"
          },
          idParceiro: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false,
            field: 'id_parceiro'
          },
    },
    {
      tableName: "usuarios_parceiros",
      timestamps: false,
    },
  );

  return UsuarioParceiro;
};
