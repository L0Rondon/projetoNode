/*const express =  require('express');
const app = express();
//iniciar o servidor
app.listen(3000,() => {
    console.log('Servidor rodando na porta 3000');
});*/

const express = require('express');
const bodyParser = require('body-parser');
const userControler = require('./Controlers/userControler');
const app = express();

//Configura o EJS como mecanismo de visualização 
app.set('view engine', 'ejs');

//Middleware para parsing do body
app.use(bodyParser.urlencoded({extended: false}));

//Rotas
app.get('/', userControler.getAllUsers);

app.get('/edit/:id', userControler.getUserById);
app.post('/edit/:id', userControler.updateUser);
app.get('/add', (req, res) => res.render('add'));
app.post('/add', userControler.addUser);


//Iniciar o servidor
app.listen(2000,() => {
    console.log('Servidor rodando na porta 2000');
})