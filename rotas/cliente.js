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

app.get('/clientes/:name',cliente_controller.cliente)

app.post('/cliente', cliente_controller.createCliente)

module.exports = app;
