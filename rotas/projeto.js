const projeto_controller = require('../controller/projeto/projeto.js')
var cors = require('cors');
const bodyParser = require('body-parser');
const app = require('../index.js');
const authMiddleware = require('../middleware/auth');



app.use(cors());

bodyParser.urlencoded({ extended: true });
bodyParser.json({ extended: true });
app.use(bodyParser.json());


app.get('/projects',authMiddleware ,projeto_controller.auth);

module.exports = function(app) {
}
