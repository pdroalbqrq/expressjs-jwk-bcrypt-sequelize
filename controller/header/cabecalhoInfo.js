const Cabecalho = require("../../models/CabecalhoInfo");
const User = require("../../models/User");

exports.cabecalhos = (req, res) => {

  Cabecalho.belongsTo(User, {foreignKey: 'usuarioId'})
  Cabecalho.findAll({ include : User }).then(result => {
    res.send(result);
  });
  
};  

exports.alterHeader = (req, res) => {
  let header = req.body;
  const { social, email, phone:numero } = req.body;

  Cabecalho.update(
    {
      social,
      email,
      numero,
      usuarioId: req.params.userId
    },
    {
      where: { id: req.params.id }
    }
  ).then(result => {
    res.send(req.params.userId);
  });
};
