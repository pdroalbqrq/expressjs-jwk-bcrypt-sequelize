const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database:  'stabilejardim'
  });

  connection.connect((err)=>{
      if(err) throw err;
      console.log('MySQL Conectado!!!')
  })

  module.exports = connection;