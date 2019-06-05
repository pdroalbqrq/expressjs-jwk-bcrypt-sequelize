const image_controller = require('../controller/imagem/imagem');
const multer = require('multer');
const multerFile = require('../middleware/multer')
const bodyParser = require('body-parser');
const app = require('../index.js');

bodyParser.urlencoded({ extended: true })
bodyParser.json({ extended: true })
app.use(bodyParser.json());

app.get('/imagens' ,image_controller.getImages);

app.get('/imagem/' ,image_controller.getImage);

app.delete('/imagem/:id', image_controller.deleteImagem);

app.post('/addimagem', multer(multerFile).single('file') ,image_controller.postImagem);

module.exports = function(app) { }


