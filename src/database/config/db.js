const Sequelize = require("sequelize");

const connection = new Sequelize({
    username: "",
    password: "",
    database: "",
    host: "localhost",
    port: "",
    dialect: "mysql",
});

module.exports = connection;
