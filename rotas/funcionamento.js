const funcionamento_controller = require('../controller/header/Funcionamento');
const bodyParser = require('body-parser');
const app = require('../index.js');

bodyParser.urlencoded({ extended: true })
bodyParser.json({ extended: true })
app.use(bodyParser.json());

app.get('/funcionamento', funcionamento_controller.funcionamento); 

app.put('/funcionamento/:id/:userId', funcionamento_controller.alterFuncionamento); 

module.exports = function(app) {
}
