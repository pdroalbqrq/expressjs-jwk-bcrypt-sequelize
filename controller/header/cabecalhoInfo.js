const Cabecalho = require("../../models/CabecalhoInfo");

exports.cabecalhos = (req, res) => {
  Cabecalho.findAll({}).then(result => {
    res.send(result);
  });
};  

exports.alterHeader = (req, res) => {
  let header = req.body;

  Cabecalho.update(
    {
      social: header.social,
      email: header.email,
      numero: header.phone
    },
    {
      where: { id: req.params.id }
    }
  ).then(result => {    
    res.send(req.body);
  });
};
