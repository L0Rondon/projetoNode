const User = require('../Models/userModel');
//Esta linha exporta a função para que ela possa ser
//usada em outras partes do aplicativo
exports.getAllUsers = (req, res) => {
    //Esta linha chama uma função
    User.getAllUsers((users) => {
        //Depois que os dados do usuario são recuperados,
        // o método é usado para renderizar a exibição.
        res.render('index', {users});
    });
};
//Chama uma função que recebe um parâmetro(req).
//Carrega o userModel e executa o script SQL
//Na sequencia renderiza a tela EDIT
exports.getUserById = (req,res) => {
    const userId = req.params.id;
    User.getUserById(userId, (user) => {
        res.render('edit',{user});

    });
};
//Passa os dados para as Constantes e no arquivo UserModel
// e executa o Script SQL passando os valores(ID<NOME<Email)
exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const updatedUser = {
        name: req.body.name,
        email: req.body.email
    };
    User.updateUser(userId, updatedUser, () => {
        res.redirect('/');
    });
};

exports.addUser = (req, res) => {
    const newUser = {
        name: req.body.name,
        email: req.body.email
    };
    User.addUser(newUser, () => {
        res.redirect('/');
    });
};