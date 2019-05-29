const express = require('express');
const cors = require('cors');
const app = module.exports = express();
require("dotenv").config();

app.use(express.static(__dirname + '/static/assets'))
app.use(cors({ origin: 'http://localhost:4200'}));

const clientes = require('./rotas/cliente')
const usuarios = require('./rotas/usuario')
const projeto = require('./rotas/projeto')
const cabecalho = require('./rotas/cabecalho')
const funcionamento = require('./rotas/funcionamento')
const noticia = require('./rotas/noticia')
const institucional = require('./rotas/institucional')
const portfolio = require('./rotas/portfolio')
 
app.use('/', clientes);

app.use('/', usuarios);

app.use('/', projeto);

app.use('/', cabecalho);

app.use('/', funcionamento);

app.use('/', noticia);

app.use('/', institucional);

app.use('/', portfolio)

app.listen(process.env.PORT || '3000', ()=>{
    console.log('ouvindo na porta 3000');
})
