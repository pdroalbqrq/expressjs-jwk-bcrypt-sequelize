const Sequelize = require('sequelize');
const sequelize = new Sequelize('stabilejardim','root','', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(()=>{
    console.log('conectado com sucesso!')
}).catch((err)=>{
    console.log(`Falha ao se conectar: ${err}`)
});


module.exports = { Sequelize: Sequelize,
                   sequelize: sequelize }