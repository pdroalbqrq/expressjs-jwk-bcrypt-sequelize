const cabecalho_controller = require('../controller/header/cabecalhoInfo.js');
var cors = require('cors');
const bodyParser = require('body-parser');
const app = require('../index.js');

app.use(cors());

bodyParser.urlencoded({ extended: true })
bodyParser.json({ extended: true })
app.use(bodyParser.json());

app.get('/cabecalhos', cabecalho_controller.cabecalhos); 

app.put('/cabecalho/:id', cabecalho_controller.alterHeader); 

module.exports = function(app) {
}
