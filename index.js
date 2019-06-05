const express = require('express');
const cors = require('cors');
const app = module.exports = express();
require("dotenv").config();

// app.use(express.static(__dirname + '/static/assets'))
var whitelist = [process.env.URL_ORIGIN1, process.env.URL_ORIGIN2 ]
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors());

const clientes = require('./rotas/cliente')
const usuarios = require('./rotas/usuario')
const projeto = require('./rotas/projeto')
const cabecalho = require('./rotas/cabecalho')
const funcionamento = require('./rotas/funcionamento')
const noticia = require('./rotas/noticia')
const institucional = require('./rotas/institucional')
const portfolio = require('./rotas/portfolio')
const imagem = require('./rotas/imagem');
 
app.use('/', clientes);

app.use('/', usuarios);

app.use('/', projeto);

app.use('/', cabecalho);

app.use('/', funcionamento);

app.use('/', noticia);

app.use('/', institucional);

app.use('/', portfolio)

app.use('/', imagem)

app.listen(process.env.PORT || '3000', ()=>{
    console.log('ouvindo na porta 3000');
})
