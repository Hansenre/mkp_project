const { Router } = require('express');

const productsController = require('../controllers/productsController');

const productsRouter = Router();

productsRouter.get('/:idDepartment', productsController.filter);


module.exports = productsRouter;