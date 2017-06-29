const DataLoader = require('./controllers/dataLoader');
const DataImport = require('./controllers/DataImport');

module.exports = function(app){
    app.post('/getCars', DataLoader.getCars);
    //post muss vermutlich noch ersetzt werden (post benutzt wenn daten in
    //DB kommen, wir wollen Daten aus DB bekommen)
}

module.exports = function(app){
    app.post('/importCars', DataImport.importCars);
}
