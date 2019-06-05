const Institucional = require("../../models/Institucional");
const User = require("../../models/User");

exports.institucional = (req, res) => {
  
  Institucional.belongsTo(User, { foreignKey: "usuarioId" });
  Institucional.findAll({ include : User }).then(result => {
    res.send(result);
  });
};

exports.alterInstitucional = (req, res) => {
  try {
      const { title, description } = req.body;

    Institucional.update(
      {
        title,
        description
      },
      {
        where: { id: req.params.id }
      }
    ).then(result => {
      console.log(req.body);
      res.send(result);
    });
  } catch (err) {
    console.log(req.body);
    res.send(err);
  }
};
