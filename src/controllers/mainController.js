
const mainController = {
    
    homeScreen:  (request, response) => {
        return response.render('home',{
            title: "MK - Marketplace | Home"
        });
    },

    sendHomeScreen:  (request, response) => {
        return response.redirect('/home', {
            title: "MK - Marketplace | Home"
        });
    },

    registerScreen: (request, response) => {
        return response.render('register', {
            title: "MK - Marketplace | Cadastro"
        });
    },

    loginScreen: (request, response) => {
        return response.render('login', {
            title: "MK - Marketplace | Login"
        });
    },
    
    establishmentScreen: (request, response) => {
        return response.render('establishment', {
            title: "MK - Marketplace | Estabelecimento"
        });
    },

    partnerScreen: (request, response) => {
        return response.render('partner', {
            title: "MK - Marketplace | Parceiro"
        });
    },
};

module.exports = mainController;

