const Noticia = require("../../models/Noticia");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
var imagem;


exports.noticia = (req, res) => {
  Noticia.findAll({}).then(result => {
    res.send(result);
  });
};

exports.alterNoticia = (req, res) => {
  try {
      const { sub_title, title, description} = req.body;
    Noticia.update(
      {
        sub_title,
        title,
        description,
        imagemId: req.params.imagemId
      },
      {
        where: { id: req.params.id }
      }
    ).then(result => {
      console.log(req.body);
      res.send(result);
    });
  } catch (err) {
    console.log(req.body);
    res.send(err);
  }
};