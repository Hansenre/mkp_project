const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");


const partnersController = {

    buscarTodos: async (request, response) => {
        const parceiros = await parceiroModel.findAll();
        return response.render('parceiros');
 },
    buscarUm: async (request, response) => {
        const { id } = request.params;
        const parceiro = await parceiroModel.findByPk(id);
        return response.render("detalheParceiro", { parceiro: parceiro})
    },

    criar: async (request, response) => {
    return  response.render('cadastro');
},
    adicionar:async (request, response) => {
    const {nome, tipo, telefones, ramo, logo } = request.body;

    await parceiroModel.adicionar({nome, tipo, telefones, ramo, logo });
    return response.redirect("/parceiros");
},

    telaEdicao: async (request, response) => {
    const { id } = request.params;
    const parceiro = await parceiroModel.findByPk(id);
    const releaseDate = new Date(parceiro.releaseDate). toISOString().split("T") [0];

    response.render("editarParceiro", {
        parceiro:{ ...parceiro.toJSON(), releaseDate},
    });
},

    editar: async (request, response)=> {
    const { nome, tipo, telefones, ramo, logo } = request.body;
    const { id } = request.params;

    parceiroModel.editar(
        { nome, tipo, telefones, ramo, logo },
        { where: { id } }
        );
        response.redirect(`/parceiro/${id}`);
},

    telaDeletar:  async (request, response) => {
    const { id } = request.params;

    const parceiro = await parceiroModel.findByPk(id);
    response.render("deleteParceiro", { parceiro });
   },

    deletar: async (request, response) => {
    const { id } = request.params;

    await parceiroModel.destroy({ where: { id }, force: true });

    response.redirect("/parceiros");
}
};

module.exports= partnersController;
