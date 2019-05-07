const express = require('express');
const cliente_controller = require('../controller/cliente/controller.js')
var cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(cors());


bodyParser.urlencoded({ extended: true })
bodyParser.json({ extended: true })
app.use(bodyParser.json());

app.get('/clientes',cliente_controller.clientes); 

app.get('/clientes/:id',cliente_controller.cliente);

app.get('/clientes/nome/:name',cliente_controller.cliente_nome);

app.get('/clientes/verificar/:email/:numero?',cliente_controller.cliente_verificarEmailNumero);

app.get('/clientes/numero/:numero',cliente_controller.cliente_numero);

app.post('/cliente', cliente_controller.createCliente);

module.exports = app;
