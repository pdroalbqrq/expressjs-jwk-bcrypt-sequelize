const express = require('express');
const app = module.exports = express();

const clientes = require('./rotas/cliente.js')
const usuarios = require('./rotas/usuario.js')
const projeto = require('./rotas/projeto.js')
const cabecalho = require('./rotas/cabecalho.js')
 
app.use('/', clientes);

app.use('/', usuarios);

app.use('/', projeto);

app.use('/', cabecalho);



app.listen('3000', ()=>{
    console.log('ouvindo na porta 3000');
})
