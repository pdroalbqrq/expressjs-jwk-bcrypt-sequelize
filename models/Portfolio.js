const db = require("../connection/sequelize-connection");

const Portfolio = db.sequelize.define("portfolio", {
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
  },
  aparece:{
    type: db.Sequelize.BOOLEAN,
    allowNull: false,
    validade:{
      notNull:true
    }
  }
});

//db.sequelize.sync({ alter: true })
module.exports = Portfolio;
