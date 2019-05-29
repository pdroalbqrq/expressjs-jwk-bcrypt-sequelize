const db = require("../connection/sequelize-connection");

const Noticia = db.sequelize.define("noticia", {
  sub_title: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [4, 20],
      notNull: true
    }
  },
  title: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [4, 20],
      notNull: true
    }
  },
  description: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [4, 500],
      notNull: true
    }
  }
});

//db.sequelize.sync({ force: true })
//db.sequelize.sync({ alter: true })
module.exports = Noticia;
