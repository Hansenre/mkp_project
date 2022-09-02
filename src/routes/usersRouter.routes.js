const { Router } = require('express');

const usersController = require('../controllers/usersController');

const userRouter = Router();

userRouter.get("/users", usersController);


module.exports = userRouter;