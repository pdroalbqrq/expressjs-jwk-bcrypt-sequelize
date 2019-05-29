const Sequelize = require('sequelize');
const sequelize = new Sequelize('stabilejardim','root','', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        // useUTC: false, //for reading from database
        dateStrings: true,
        typeCast: true,
        timezone: "+0:00"
      },
      timezone: "+0:00", //for writing to database
});

sequelize.authenticate().then(()=>{
    console.log('conectado com sucesso!')
}).catch((err)=>{
    console.log(`Falha ao se conectar: ${err}`)
});


module.exports = { Sequelize: Sequelize,
                   sequelize: sequelize }