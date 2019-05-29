const noticia_controller = require('../controller/noticia/noticia');
const multerFile = require('../middleware/multer')
const bodyParser = require('body-parser');
const app = require('../index.js');

bodyParser.urlencoded({ extended: true })
bodyParser.json({ extended: true })
app.use(bodyParser.json());

app.get('/noticia', noticia_controller.noticia);

app.put('/editnoticia/:id/:userId', noticia_controller.alterNoticia);

app.post('/addnoticia', noticia_controller.postImagem);

module.exports = function(app) {
}
