//const express = require("express"); Tinha dois express
const { Router } = require ('express');

const mainController = require('../controllers/mainController');

const mainRouter = Router();

mainRouter.get('/', mainController.homeScreen);
mainRouter.get('/home', mainController.sendHomeScreen);
mainRouter.get('/register', mainController.registerScreen);
mainRouter.get('/login', mainController.loginScreen);
mainRouter.get('/establishment', mainController.establishmentScreen);
mainRouter.get('/partner', mainController.partnerScreen);

module.exports = mainRouter;