const db = require('../connection/sequelize-connection');

const Cliente = db.sequelize.define('cliente', {
        nome:{
            type: db.Sequelize.STRING,
            allowNull: false,
            validate:{
                len: [4,50],
                notNull: true, 
            },
        },
        email:{
            type: db.Sequelize.STRING,
            allowNull: false,
              unique: 'compositeIndex',
              validate:{
                len: [4,100],
                isEmail: true,
                notNull: true, 
            },
              
        },
        numero:{
            type: db.Sequelize.STRING,
            allowNull: false,
            validate:{
                len: [11,11],
                notNull: true, 
            },
              
        }, 
        mensagem:{
            type: db.Sequelize.STRING,
            allowNull: false,
            validate:{
                len: [4,150],
                notNull: true, 
            },      
        }
});


module.exports = Cliente

