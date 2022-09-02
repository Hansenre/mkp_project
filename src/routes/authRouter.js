
const { Router } = require("express"); //Mudei script estava express

const authController = require('../controllers/authController');

const authRouter = Router();

authRouter.get('/', authController.getLoginScreen);
authRouter.post('/login', authController.login);

module.exports = authRouter;