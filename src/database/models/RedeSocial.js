const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const RedeSocial = sequelize.define(
    "RedeSocial",
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
            allowNull: false,
            field: 'id_estabelecimento'
          },
          idParceiro: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false,
            field: 'id_parceiro'
          },
          link: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    },
    {
      tableName: "redes_sociais",
      timestamps: false,
    },
  );

  return RedeSocial;
};
