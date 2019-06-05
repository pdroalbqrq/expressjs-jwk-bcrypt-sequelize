const db = require("../connection/sequelize-connection");

const Institucional = db.sequelize.define("institucional", {
  title: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [4, 20],
      notNull: true
    }
  },
  description: {
    type: db.Sequelize.TEXT,
    allowNull: false,
    validate: {
      min: 5,
      notNull: true
    }
  }
});

//db.sequelize.sync({ force: true })
//db.sequelize.sync({ alter: true })
module.exports = Institucional;
