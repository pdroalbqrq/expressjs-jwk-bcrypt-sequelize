const usuario_controller = require('../controller/usuario/usuario.js')

const bodyParser = require('body-parser');
const app = require('../index.js');

bodyParser.urlencoded({ extended: true })
bodyParser.json({ extended: true })
app.use(bodyParser.json());

app.get('/usuarios',usuario_controller.usuarios);

app.get('/usuario/:id',usuario_controller.usuarioById);

app.post('/usuario',usuario_controller.usuario);

app.get('/perfil',usuario_controller.perfil);

app.put('/alterperfil/:id/:userId',usuario_controller.alterPerfil);

app.get('/usuarios/verificar/:email/:numero?',usuario_controller.usuario_verificarEmailNumero);

app.delete('/deleteusuario/:id',usuario_controller.destroy_usuario);

app.post('/autenticar',usuario_controller.autenticar);

app.post('/userimage/:nome',usuario_controller.userImage);

module.exports = function(app) { }
