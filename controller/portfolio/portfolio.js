const Portfolio = require("../../models/Portfolio");
const Imagem = require("../../models/Imagem");
const User = require("../../models/User");



exports.portfolios = (req, res) => {
  try {

    Portfolio.belongsTo(User, { foreignKey: "usuarioId" });
    Portfolio.belongsTo(Imagem, { foreignKey: "imagemId" });
    Portfolio.findAll({  where: { aparece: 1 },include : [ Imagem, User ]  }).then(result => {
      res.send(result);
    });
  } catch (err) {
    res.status(400).send({ error: "A busca falhou" });
  }
};

exports.portfoliosAll = (req, res) => {
    try {
      Portfolio.findAll({  }).then(result => {
        res.send(result);
      });
    } catch (err) {
      res.status(400).send({ error: "A busca falhou" });
    }
  };

exports.alterPortfolio = (req, res) => {
  const { title, description, aparece } = req.body
  try {
    Portfolio.update({
        title,
        description,
        aparece,
        imagemId: req.params.imageId
    },
    {
      where: { id: req.params.id }
    }).then(result =>{
        res.send(result);
        console.log(req.body);
        console.log(result);
    })
  } catch (e) {
    res.status(400).send({ error: e });
  }
};

exports.destroy_portfolio = (req,res)=>{
  Portfolio.destroy({
    where:{ id: req.params.id }
  }).then(()=>res.json({ Status: 'Portfólio Deletado'}))
    .catch(err=>res.send('error: ' + err))
  };

exports.createPortfolio = async(req, res) => {
  const { title, description, aparece } = req.body
  try {
   await Portfolio.create({
        title,
        description,
        aparece,
        imagemId: req.params.id
    }).then(result =>{
        res.send(result);
        console.log(req.body);
        console.log(result);
    })
  } catch (e) {
    res.status(400).send({ error: e });
  }
};

