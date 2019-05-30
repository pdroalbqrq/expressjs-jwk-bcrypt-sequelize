const User = require("../../models/User.js");
const dbsequelize = require('../../connection/sequelize-connection');
const bcrypt = require("bcryptjs");
const authConfig = require("../../config/auth");
const multer = require("multer");
const path = require("path");

const Op = dbsequelize.Sequelize.Op;

const jwt = require("jsonwebtoken");


const storage = multer.diskStorage({
    //destination: path.resolve(__dirname, '..', '..', '/static/assets/images'),
    filename: function(req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + 'foto' + path.extname(file.originalname)
      );
    }
  });
  
  const upload = multer({
    storage: storage
  })

  exports.userImage = async (req, res) => {
    await upload.single(req.params.nome)(req, res, err => {
      if (err) {
        return res.status(400).send(err);
      } else {
        imagem = req.file;
        console.log('deu certo');
      }
    });
  };

const generateToken = params => {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400
  });
};

exports.usuarios = (req, res) => {
  try {
    User.findAll({ attributes: ["id", "nome", "email", "numero", "descricao", "aparece", "updatedAt", "usuarioId"] }).then(result => {
      res.send(result);
    });
  } catch (err) {
    res.status(400).send({ error: "A busca falhou" });
  }
};

exports.perfil = (req, res) => {
  try {
    User.findAll({ where: { aparece: 1 } }).then(result => {
      res.send(result);
    });
  } catch (err) {
    res.status(400).send({ error: "A busca falhou" });
  }
};

exports.alterPerfil = (req, res) => {
  const { aparece } = req.body
  try {
    User.update({
        aparece
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

exports.usuarioById = (req, res) => {
  let idUser = req.params.id;
  User.findByPk(idUser).then(data => {
    res.send(data);
  });
};

exports.usuario = (req, res) => {

  const { nome, email, senha, numero, descricao } = req.body;
  //console.log(req.body);

    User.create({
      nome,
      email,
      senha,
      numero,
      descricao
    }).then(() => User.findOrCreate({ where: { email, numero }}))
      .then(user => {
    
      res.send({ user, token: generateToken({ id: user.id }) });
      console.log(user);
    });
    //User.senha = undefined;
};

exports.destroy_usuario = (req,res)=>{
  User.destroy({
    where:{ id: req.params.id }
  }).then(()=>res.json({ Status: 'Usuário Deletado'}))
    .catch(err=>res.send('error: ' + err))
  };

exports.usuario_verificarEmailNumero = (req,res) =>{
  User.findAll({
      where: {
          [Op.or]: [{email: req.params.email},{ numero: req.params.numero}]
      }
  }).then(data => {
      res.send(data)
  })
}

exports.autenticar = async (req, res) => {
  const { email, senha } = req.body;

  await User.findOne({ where: { email } }).then(async user => {
    if (!(await user))
      return res.status(400).send({ error: "Usuário não existe" });

    if (!(await bcrypt.compare(senha, user.senha)))
      return res.status(400).send({ error: "Senha inválida" });

    user.senha = undefined;

    res.send({ user, token: generateToken({ id: user.id }) });
  });
};
