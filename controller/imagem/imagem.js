const Imagem = require("../../models/Imagem");
const aws = require("aws-sdk");

exports.getImages = async (req, res) => {
  Imagem.findAll({}).then(imagens => {
    res.json(imagens);
  });
};

exports.getImage = async (req, res) => {
  try {
    const params = {
      Bucket: "stabilejardim"
    };
    var s3 = new aws.S3();
    const response = await s3.listObjects(params, (err, data) => {
      res.send(data);
    });
  } catch (e) {
    res.send(e);
  }
};

exports.postImagem = async (req, res) => {
  const { originalname: nome, size, key, location: url = "" } = req.file;
  const image = await Imagem.create({
    nome,
    size,
    key,
    url
  });
  return res.json(image);
};

exports.deleteImagem = (req, res) => {
  Imagem.destroy({
    where: { id: req.params.id },
    individualHooks: true,
    returning: true,
    plain: true
  }).then(() => {
    res.send('excluído');
  });
};
