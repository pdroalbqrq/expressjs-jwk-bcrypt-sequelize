const db = require("../connection/sequelize-connection");

const user = require("../models/User");
const portfolio = require("../models/Portfolio");
const noticia = require("../models/Noticia");
const aws = require("aws-sdk");

const s3 = new aws.S3();

const Imagem = db.sequelize.define("imagem", {
  nome: {
    type: db.Sequelize.STRING
  },
  size: {
    type: db.Sequelize.STRING
  },
  key: {
    type: db.Sequelize.STRING
  },
  url: {
    type: db.Sequelize.STRING
  }
});

Imagem.addHook('beforeDestroy', (user, options) => {
  console.log(user);
  console.log(options);
  return s3.deleteObject({
        Bucket: "stabilejardim",
        Key: user.dataValues.key
      }).promise();
});

Imagem.hasMany(user);
Imagem.hasMany(noticia);
Imagem.hasMany(portfolio);

//db.sequelize.sync({ alter: true })
module.exports = Imagem;
