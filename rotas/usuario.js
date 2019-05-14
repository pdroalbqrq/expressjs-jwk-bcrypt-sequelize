const usuario_controller = require('../controller/usuario/usuario.js')
var cors = require('cors');
const bodyParser = require('body-parser');
const app = require('../index.js');

app.use(cors());

bodyParser.urlencoded({ extended: true })
bodyParser.json({ extended: true })
app.use(bodyParser.json());

app.get('/usuarios',usuario_controller.usuarios);

app.get('/usuario/:id',usuario_controller.usuarioById);

app.post('/usuario',usuario_controller.usuario);

app.post('/autenticar',usuario_controller.autenticar);

module.exports = function(app) {
}
