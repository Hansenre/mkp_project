const Sequelize = require("sequelize");

const connection = new Sequelize({
    username: "root",
    password: "devshow22",
    database: "mkp",
    host: "localhost",
    port: 3306,
    dialect: "mysql",
});

module.exports = connection;
