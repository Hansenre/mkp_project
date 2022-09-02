const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const EstabelecimentoParceiro = sequelize.define(
    "EstabelecimentoParceiro",
    {
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
    },
    {
      tableName: "estabelecimentos_parceiros",
      timestamps: false,
    },
  );

  return EstabelecimentoParceiro;
};
