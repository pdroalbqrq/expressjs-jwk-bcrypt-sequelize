const cabecalho_controller = require('../controller/header/cabecalhoInfo.js');
const bodyParser = require('body-parser');
const app = require('../index.js');

bodyParser.urlencoded({ extended: true })
bodyParser.json({ extended: true })
app.use(bodyParser.json());

app.get('/cabecalhos', cabecalho_controller.cabecalhos); 

app.put('/cabecalho/:id/:userId', cabecalho_controller.alterHeader); 

module.exports = function(app) {
}
