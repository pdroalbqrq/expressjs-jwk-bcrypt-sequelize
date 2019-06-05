const Cliente = require('../../models/Cliente');
const dbsequelize = require('../../connection/sequelize-connection');


const Op = dbsequelize.Sequelize.Op;

exports.clientes = (req, res) => {
     Cliente.findAll({})
     .then(result => {
        res.send(result)
    })
}

exports.createCliente = (req, res) => {
    let cliente = req.body;

    Cliente.create({
        nome: cliente.nome,
        email: cliente.email,
        numero: cliente.numero,
        mensagem: cliente.mensagem
    }).then(() => Cliente.findOrCreate({ where: {email: cliente.email, numero: cliente.numero }}))
      .then((data) => {
            console.log(data);
            res.send(data)
    })
}

exports.cliente = (req, res) => {
   let idcliente = req.params.id
    Cliente.findByPk(idcliente).then(data =>{
         res.send(data)
    })
}
  
exports.cliente_nome = (req, res) => {
    nomeCliente = req.params.name
    Cliente.findOne({ 
        where: { nome: nomeCliente } 
    })
        .then(data => {
            res.send(data)
    })
}

exports.cliente_verificarEmailNumero = (req,res) =>{
    Cliente.findAll({
        where: {
            [Op.or]: [{email: req.params.email},{ numero: req.params.numero}]
        }
    }).then(data => {
        res.send(data)
    })
}

exports.cliente_numero = (req,res) =>{
    Cliente.findAll({
        where:{ numero: req.params.numero }
    }).then((data)=>{
        res.send(data)
    })
}
