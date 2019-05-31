const portfolio_controller = require('../controller/portfolio/portfolio');
const bodyParser = require('body-parser');
const app = require('../index.js');


bodyParser.urlencoded({ extended: true })
bodyParser.json({ extended: true })
app.use(bodyParser.json());

app.get('/portfolio', portfolio_controller.portfolios);

app.get('/portfoliotodos', portfolio_controller.portfoliosAll);

app.put('/editportfolio/:id/:userId/:imageId', portfolio_controller.alterPortfolio);

app.delete('/deleteportfolio/:id', portfolio_controller.destroy_portfolio);

app.post('/addportfolio/:id', portfolio_controller.createPortfolio);

module.exports = function(app) {
}
