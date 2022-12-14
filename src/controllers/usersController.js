const fs = require('fs');
const path = require('path');
const { v4: uuid } = require('uuid');
const bcrypt = require('bcryptjs');

const userPath = path.join(__dirname, '..', 'database', 'users.json');

const usersController = {

    registerScreen: (request, response) => {
        return response.render('register');
    },

    create: (request, response) => {
        const { password } = request.body;
        console.log(password)

        const passwordHash = bcrypt.hashSync(password);

        const newUser = {
            id: uuid(),
            ...request.body, 
            password: passwordHash
        }

        const users = JSON.parse(fs.readFileSync(userPath));

        users.push(newUser);

        fs.writeFileSync(userPath, JSON.stringify(users));

        return response.redirect('/');
    }
}

module.exports = usersController;