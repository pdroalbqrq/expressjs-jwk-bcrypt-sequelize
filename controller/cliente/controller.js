const db = require('../../db-conection');

exports.clientes = (req, res) => {

    let sql = ` SELECT * FROM cliente`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
}
  
exports.cliente = (req, res) => {

    let sql = ` SELECT * FROM cliente WHERE nome = ?`;
    let query = db.query(sql, req.params.name, (err, results) => {
        if (err) throw err;
        res.send(results);
    })
}

exports.createCliente = (req, res) => {

    let cliente = req.body;
    let sql = " INSERT INTO cliente (nome , email , numero , mensagem) VALUES (?,?,?,?) ";
    let query = db.query(sql, [cliente.nome, cliente.email, cliente.numero, cliente.mensagem], (err, results) => {
        if (err) throw err;
        res.send(results)
    })

}