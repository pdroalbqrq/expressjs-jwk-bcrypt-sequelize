const Funcionamento = require("../../models/Funcionamento");
const User = require("../../models/User");

exports.funcionamento = (req, res) => {

  Funcionamento.belongsTo(User, { foreignKey: "usuarioId" });
  Funcionamento.findAll({ include : User }).then(result => {
    res.send(result);
  });
};

exports.alterFuncionamento = (req, res) => {
  let funcionamento = req.body;

  Funcionamento.update(
    {
      horario: funcionamento.horario
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
