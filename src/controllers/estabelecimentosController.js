const fs = require('fs');
const path = require('path');
const { v4: uuid } = require('uuid');
const { estabelecimentoModel } = require('../database');


const estabelecimentosController = {
    buscarTodos: async (request, response) => {
        const estabelecimentos = await estabelecimentoModel.findAll();
        return response.render('estabelecimentos');
 },
    buscarUm: async (request, response) => {
        const { id } = request.params;
        const estabelecimento = await estabelecimentoModel.findByPk(id);
        return response.render("detalheEstabelecimento", { estabelecimento: estabelecimento})
    },

    criar: async (request, response) => {
    return  response.render('cadastro');
},
    adicionar:async (request, response) => {
    const {nome, tipo, telefones, ramo, logo } = request.body;

    await estabelecimentoModel.adicionar({nome, tipo, telefones, ramo, logo });
    return response.redirect("/estabelecimentos");
},

    telaEdicao: async (request, response) => {
    const { id } = request.params;
    const estabelecimento = await estabelecimentoModel.findByPk(id);
    const releaseDate = new Date(estabelecimento.releaseDate). toISOString().split("T") [0];

    response.render("editarEstabelecimento", {
        estabelecimento:{ ...estabelecimento.toJSON(), releaseDate},
    });
},

    editar: async (request, response)=> {
    const { nome, tipo, telefones, ramo, logo } = request.body;
    const { id } = request.params;

    estabelecimentoModel.editar(
        { nome, tipo, telefones, ramo, logo },
        { where: { id } }
        );
        response.redirect(`/estabelecimentos/${id}`);
},

    telaDeletar:  async (request, response) => {
    const { id } = request.params;

    const estabelecimento = await estabelecimentoModel.findByPk(id);
    response.render("deleteEstabelecimento", { estabelecimento});
   },

    deletar: async (request, response) => {
    const { id } = request.params;

    await estabelecimentoModel.destroy({ where: { id }, force: true });

    response.redirect("/estabelecimentos");
}
};

module.exports= estabelecimentosController;
