const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const {usuarioModel} = require('../database')


const authController = {
    getLoginScreen: async (request, response) => {
        return response.render('index');
    },
    login: (request, response) => {
        const { login, password } = request.body;

        const users = JSON.parse(fs.readFileSync(usuarioModel));

        const userFound = users.find(user => user.login === login);

        if (!userFound) {
            return response.status(401).redirect('/');
        }

        const ehSenhaCorreta = bcrypt.compareSync(password, userFound.password);

        if (!ehSenhaCorreta) {
            return response.status(401).redirect('/');
        }

        request.session.idUser = userFound.id
        request.session.isAuthorized = true
        request.session.usertype = userFound["usuario-cliente"]

        return response.redirect('home');
    }
}

module.exports = authController;