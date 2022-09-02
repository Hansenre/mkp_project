const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const UsuarioEstabelecimento = sequelize.define(
    "UsuarioEstabelecimento",
    { 
        idEstabelecimento: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false,
            field: 'id_estabelecimento'
          },
          idUsuario: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false,
            field: 'id_usuario'
          },
    },
    {
      tableName: "usuarios_estabelecimentos",
      timestamps: false,
    }
  );

  return UsuarioEstabelecimento;
};
