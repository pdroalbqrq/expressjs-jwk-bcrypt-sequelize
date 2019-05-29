const Cabecalho = require("../../models/CabecalhoInfo");

exports.cabecalhos = (req, res) => {
  Cabecalho.findAll({}).then(result => {
    res.send(result);
  });
};  

exports.alterHeader = (req, res) => {
  let header = req.body;
  const { social, email, numero } = req.body;

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
