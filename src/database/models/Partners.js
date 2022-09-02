const Sequelize = require("sequelize");
const connection = require("../config/db");

const Partners = connection.define("Partners",{ 
      
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name:{ 
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      branch: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      image: {
        type: Sequelize.INTEGER,
        allowNull: false,
        
      },
      icon: {
        type: Sequelize.INTEGER,
        allowNull: false,
        
      }
});
  
Partners.sync({force: false})
  .then(() => {
      console.log("Created table Partners");
  });

