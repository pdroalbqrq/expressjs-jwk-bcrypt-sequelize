const noticia_controller = require('../controller/noticia/noticia');
const multer = require('multer');
const multerFile = require('../middleware/multer')
const bodyParser = require('body-parser');
const app = require('../index.js');

bodyParser.urlencoded({ extended: true })
bodyParser.json({ extended: true })
app.use(bodyParser.json());

app.get('/noticia', noticia_controller.noticia);

app.put('/editnoticia/:id/:userId/:imagemId', noticia_controller.alterNoticia);


module.exports = function(app) {
}
