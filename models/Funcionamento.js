const db = require("../connection/sequelize-connection");
const Funcionamento = db.sequelize.define("funcionamento", {

  horario: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [4, 100],
      notNull: true
    }
  }
});

//db.sequelize.sync({ force: true })
module.exports = Funcionamento;
