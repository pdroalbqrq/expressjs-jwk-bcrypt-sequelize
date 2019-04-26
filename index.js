const express = require('express');
const clientes = require('./rotas/cliente.js')
const app = express();

app.use('/', clientes);

app.listen('3000', ()=>{
    console.log('ouvindo na porta 3000');
})