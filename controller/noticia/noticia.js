const Noticia = require("../../models/Noticia");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
var imagem;


// const storage = multer.diskStorage({
//   //destination: path.join(process.cwd(), "/static/assets/images"),
//   filename: function(req, file, cb) {
//     cb(
//       null,
//       file.fieldname + "-" + 'foto' + path.extname(file.originalname)
//     );
//   }
// });

// const upload = multer({
//   storage: storage
// }).single("noticia");

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
        description
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

exports.postImagem = (req, res) => {
  console.log(req.file);
  // await upload(req, res, err => {
  //   if (err) {
  //     return res.status(400).send(err);
  //   } else {
  //     imagem = req.file;
  //     console.log(imagem);
  //   }
  // });
};
