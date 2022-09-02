/*const sequelize = require('./config/sequelize');

const db = {
    enderecoModel: require('./models/Endereco')(sequelize),
    estabelecimentoModel: require('./models/Estabelecimento')(sequelize),
    estabelecimentoParceiroModel: require('./models/EstabelecimentoParceiro')(sequelize),
    estabelecimentoProdutoModel: require('./models/EstabelecimentoProduto')(sequelize),
    parceiroModel: require('./models/Parceiro')(sequelize),
    produtoModel: require('./models/Produto')(sequelize),
    redeSocialModel: require('./models/RedeSocial')(sequelize),
    tipoUsuarioModel: require('./models/TipoUsuario')(sequelize),
    usuarioModel: require('./models/Usuario')(sequelize),
    usuarioEstabelecimentoModel: require('./models/UsuarioEstabelecimento')(sequelize),
    tipoUsuarioParceiroModel: require('./models/UsuarioParceiro')(sequelize),
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
*/