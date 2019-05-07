const db = require('../../db-conection');
const express = require('express');

const app = express();


exports.clientes = (req, res) => {

    let sql = ` SELECT * FROM cliente`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
}

exports.cliente = (req, res) => {
    nome = req.params.id
    console.log(req.params.id)
    let sql = ` SELECT * FROM cliente WHERE id = ? `;
    let query = db.query(sql, req.params.name, (err, results) => {
        if (err) throw err;
        res.send(results);
    })
}
  
exports.cliente_nome = (req, res) => {
    nome = req.params.nome
    console.log(req.params.name)
    let sql = ` SELECT * FROM cliente WHERE nome = ? `;
    let query = db.query(sql, req.params.name, (err, results) => {
        if (err) throw err;
        res.send(results);
    })
}

exports.cliente_verificarEmailNumero = (req,res) =>{
    let sql = ` SELECT email,numero FROM cliente WHERE email = ? or numero = ?`;
    let query = db.query(sql, [req.params.email, req.params.numero], (err, results) => {
        if (err) throw err;
        res.send(results);
        return true;
    })
}

exports.cliente_numero = (req,res) =>{
    let sql = ` SELECT numero FROM cliente WHERE numero = ? `;
    let query = db.query(sql, req.params.numero, (err, results) => {
        if (err) throw err;
        res.send(results);
    })
}

exports.createCliente = (req, res) => {

    let cliente = req.body;

    let sql = ` INSERT INTO cliente (nome , email , numero , mensagem)
                VALUES ( ?, ?, ?, ?)`
    let query = db.query(sql, [cliente.nome, cliente.email, cliente.numero, cliente.mensagem], (err, results) => {
        if (err) throw err;
        res.send(results)
    })

}