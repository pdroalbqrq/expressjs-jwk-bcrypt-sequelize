const db = require("../connection/sequelize-connection");

const user = require('../models/User');
const portfolio = require('../models/Portfolio');
const noticia = require('../models/Noticia')

const Imagem = db.sequelize.define("imagem", {
  nome: {
    type: db.Sequelize.STRING
  },
  size: {
    type: db.Sequelize.STRING
  },
  key:{
    type: db.Sequelize.STRING
  },
  url:{
    type: db.Sequelize.STRING
  }

});

Imagem.hasMany(user);
Imagem.hasMany(noticia);
Imagem.hasMany(portfolio);

//db.sequelize.sync({ alter: true })
module.exports = Imagem;
