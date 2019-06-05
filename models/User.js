const db = require("../connection/sequelize-connection");
const bcrypt = require("bcryptjs");
const cabecalho = require('./CabecalhoInfo'); 
const funcionamento = require('./Funcionamento'); 
const noticia = require('./Noticia');
const institucional = require('./Institucional');
const Portfolio = require('./Portfolio'); 

const User = db.sequelize.define("usuarios", {
  nome: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [4, 50],
      notNull: true
    }
  },
  email: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [4, 100],
      isEmail: true,
      notNull: true 
    },
  },
  numero: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [11, 11],
      notNull: true
    }
  },
  descricao: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [20, 400],
      notNull: true
    }
  },
  senha: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: true
    }
  },
  aparece:{
    type: db.Sequelize.BOOLEAN,
    defaultValue:false,
    allowNull: false,
    validade:{
      notNull:true
    }
  },
  ativo:{
    type: db.Sequelize.BOOLEAN,
    defaultValue:true,
    allowNull: false,
    validade:{
      notNull:true
    }
  }
});

User.beforeCreate("Criptografar", async user => {
  const salt = await bcrypt.genSalt(10);
  user.senha = await bcrypt.hash(user.senha, salt);
});

User.hasMany(User);
User.hasMany(cabecalho);
User.hasMany(funcionamento);
User.hasMany(Portfolio);
User.hasMany(noticia, {foreignKey: 'usuarioId'});
User.hasMany(institucional);

//db.sequelize.sync({ force: true })
//db.sequelize.sync({ alter: true })
module.exports = User;
