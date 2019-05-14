const User = require('../../models/User.js');
const bcrypt = require("bcryptjs");
const authConfig = require('../../config/auth');


const jwt = require('jsonwebtoken');

const generateToken = (params) =>{
    return jwt.sign( params, authConfig.secret, {
        expiresIn: 86400,
    })
}

 exports.usuarios =  (req,res) => { 
    try{
        User.findAll({attributes: ['nome', 'email']})
        .then(result => {
           res.send(result)
       })
    } catch (err){
        res.status(400).send({error : 'A busca falhou'})
    }
   
 };

 exports.usuarioById = (req, res) => {
    let idUser = req.params.id
     User.findByPk(idUser).then(data =>{
          res.send(data)
     })
 }

 exports.usuario = async (req,res)=> {
     let usuario = req.body;
     const { nome,email,senha } = req.body;

     try{
          if(await User.findOne({ where: { email }}) )
            return res.status(400).send({error: "Usuário já existe"});

        await User.create({
            nome, email, senha
        }).then(user =>{
            user.dataValues.senha = undefined;
            console.log(user.dataValues);
            res.send({user,
                     token: generateToken({id: user.id})});
        })
        User.senha = undefined;
     } catch(err) {
        return res.status(400).send({error: 'O registro falhou'})
     }
 }

 exports.autenticar = async (req,res) =>{

        const { email, senha } = req.body;

        await User.findOne({ where:{ email }}).then(async (user)=>{
            if(!await user)
            return res.status(400).send({ error: "Usuário não existe"});
    
            if(!await bcrypt.compare(senha, user.senha))
            return res.status(400).send({ error: "Senha inválida"});
    
            user.senha = undefined;
    
            res.send({ user, 
                        token:generateToken({id: user.id})
                    });
            
        })
 }