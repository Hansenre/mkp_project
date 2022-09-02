const { urlencoded } = require("express");

const productsAll = [
    {
        id:1,
        name: "Eletronics"
    },
    {
        id:2,
        name: "Home Utilities"
    },
    {
        id:3,
        name: "Fashion"
    },

];

const productsController = {

    show: (request, response) => {
        response.send('Todos os produtos');
    },

    filter: (request, response) => {
        //Ajustar busca de departamentos
        const {idDepartment} = resquest.params;
        const foundProducts = productsAll.find(item => item.id === +idDepartment);
        
        console.log(foundProducts);
        return response.send(foundProducts);
    }, 
}

module.exports = productsController;