const { Router} = require('express');
const multer = require('multer');

const storage = require('../configs/multer');
const { adicionar, criar, telaEdicao, editar } = require('../controllers/estabelecimentosController');
const estabelecimentosController = require('../controllers/estabelecimentosController');
const upload = multer({storage});
const estabelecimentosRouter = Router()



estabelecimentosRouter.get("/estabelecimentos", estabelecimentosController.buscarTodos);
estabelecimentosRouter.get("/estabelecimentos/:id", estabelecimentosController.buscarUm);

estabelecimentosRouter.post("/estabelecimentos", estabelecimentosController.criar);
estabelecimentosRouter.get("/estabelecimentos/add", estabelecimentosController.adicionar);

estabelecimentosRouter.get("/estabelecimentos/edit/:id", estabelecimentosController.telaEdicao);
estabelecimentosRouter.put("/estabelecimentos/:id", estabelecimentosController.editar);

estabelecimentosRouter.get("/estabelecimentos/delete/:id", estabelecimentosController.telaDeletar);
estabelecimentosRouter.delete("estabelecimentos/:id", estabelecimentosController.deletar )

module.exports = estabelecimentosRouter