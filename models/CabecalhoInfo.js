const db = require("../connection/sequelize-connection");
const Cabecalho = db.sequelize.define("cabecalho", {

  social: {
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
    }
  },
  numero: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [11, 11],
      notNull: true
    }
  }
});

//db.sequelize.sync({ force: true })
module.exports = Cabecalho;
