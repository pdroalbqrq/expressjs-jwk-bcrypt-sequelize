const Noticia = require("../../models/Noticia");
const User = require("../../models/User");
const Imagem = require("../../models/Imagem");

exports.noticia = (req, res) => {
  
  Noticia.belongsTo(User, {foreignKey: 'usuarioId'})
  Noticia.belongsTo(Imagem, {foreignKey: 'imagemId'})
  Noticia.findAll({ include : [ User, Imagem ] }).then(result => {
    res.send(result);
  });

};

exports.alterNoticia = (req, res) => {
  try {
      const { sub_title, title, description} = req.body;
    Noticia.update(
      {
        sub_title,
        title,
        description,
        imagemId: req.params.imagemId
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