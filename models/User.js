const db = require("../connection/sequelize-connection");
const bcrypt = require("bcryptjs");

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
  senha: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: true
    }
  }
});

User.beforeCreate("Criptografar", async user => {
  const salt = await bcrypt.genSalt(10);
  user.senha = await bcrypt.hash(user.senha, salt);
});


//db.sequelize.sync({ force: true })
module.exports = User;
