const Funcionamento = require("../../models/Funcionamento");

exports.funcionamento = (req, res) => {
    Funcionamento.findAll({}).then(result => {
    res.send(result);
  });
};

exports.alterFuncionamento = (req, res) => {
    let funcionamento = req.body;
  
    Funcionamento.update(
      {
        horario: funcionamento.horario,
      },
      {
        where: { id: req.params.id }
      }
    ).then(result => {
      console.log(req.body);
      console.log(req.params.id);
      console.log(req.params.userId);
      res.send(result);
    });
  };
  