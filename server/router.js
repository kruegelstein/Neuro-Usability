const DataLoader = require('./controllers/dataLoader');

module.exports = function(app){
    app.post('/testRoute', DataLoader.func1);
}
