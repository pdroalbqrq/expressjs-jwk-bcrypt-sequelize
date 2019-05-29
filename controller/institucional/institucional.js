const Institucional = require("../../models/Institucional");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
var imagem;


const storage = multer.diskStorage({
  destination: path.join(process.cwd(), "/static/assets/videos"),
  filename: function(req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + 'video' + path.extname(file.originalname)
    );
  }
});

const upload = multer({
  storage: storage
}).single("institucional");

exports.institucional = (req, res) => {
  Institucional.findAll({}).then(result => {
    res.send(result);
  });
};

exports.alterInstitucional = (req, res) => {
  try {
      const { title, description } = req.body;

    Institucional.update(
      {
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

exports.postVideo = async (req, res) => {
  await upload(req, res, err => {
    if (err) {
      return res.status(400).send(err);
    } else {
      video = req.file;
      console.log(video);
      res.send(video);
    }
  });
};
