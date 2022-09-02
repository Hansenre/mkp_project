const { Router } = require("express");

const partnersController = require('../controllers/partnersController');

const partnersRouter = Router ();

partnersRouter.get("/", partnersController.buscarTodos);

//partnersRouter.get("/parceiros", partnersController.buscarTodos);
//partnersRouter.get("/parceiros/:id", partnersController.buscarUm);

//partnersRouter.post("/parceiros", partnersController.criar);
//partnersRouter.get("/parceiros/add", partnersController.adicionar);

//partnersRouter.get("/parceiros/edit/:id", partnersController.telaEdicao);
//partnersRouter.put("/parceiros/:id", partnersController.editar);

//partnersRouter.get("/parceiros/delete/:id", partnersController.telaDeletar);
//partnersRouter.delete("parceiros/:id", partnersController.deletar );

module.exports = partnersRouter;