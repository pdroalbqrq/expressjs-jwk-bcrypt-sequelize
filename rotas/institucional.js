const institucional_controller = require('../controller/institucional/institucional');
const bodyParser = require('body-parser');
const app = require('../index.js');

bodyParser.urlencoded({ extended: true })
bodyParser.json({ extended: true })
app.use(bodyParser.json());

app.get('/institucional', institucional_controller.institucional);

app.put('/editinstitucional/:id/:userId', institucional_controller.alterInstitucional);

app.post('/addinstitucional', institucional_controller.postVideo);

module.exports = function(app) {
}
