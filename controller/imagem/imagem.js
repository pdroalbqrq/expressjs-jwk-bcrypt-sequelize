const Imagem = require("../../models/Imagem");


exports.getImages = async (req,res)=>{
    Imagem.findAll({}).then((imagens)=>{
        res.json(imagens);
    });

}
exports.postImagem = async (req, res) => {
    const { originalname: nome, size, key, location: url = "" } = req.file
    const image = await Imagem.create({
       nome,
       size,
       key,
       url,
   })
   return res.json(image);
  };
  