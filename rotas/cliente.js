const express = require('express');
const cliente_controller = require('../controller/cliente/controller.js')
var cors = require('cors');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const { check, validationResult } = require('express-validator/check');

const app = express();

app.use(cors());
app.use(expressValidator);





bodyParser.urlencoded({ extended: true })
bodyParser.json({ extended: true })
app.use(bodyParser.json());

app.get('/clientes',cliente_controller.clientes); 

app.get('/clientes/:id',cliente_controller.cliente);

app.get('/clientes/nome/:name',cliente_controller.cliente_nome);

app.get('/clientes/email/:email',cliente_controller.cliente_email);

app.get('/clientes/numero/:numero',cliente_controller.cliente_numero);

app.post('/cliente',[
    // check( cliente.nome,'nome está vazio').isEmpty(),
    // check( cliente.nome,'nome com menos de 3 letras').isLength({ min: 4 }),
    // check( cliente.email,'E-mail inválido').isEmail(),
    // check( cliente.email,'E-mail vazio').isEmpty(),
    // check( cliente.numero,'numero vazio').isEmpty(),
    // check( cliente.mensagem,'mensagem vazia').isEmpty(),
], cliente_controller.createCliente);

module.exports = app;
