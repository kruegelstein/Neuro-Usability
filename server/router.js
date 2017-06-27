const DataLoader = require('./controllers/dataLoader');

module.exports = function(app){
    app.post('/getCars', DataLoader.getCars);        
    //post muss vermutlich noch ersetzt werden (post benutzt wenn daten in 
    //DB kommen, wir wollen Daten aus DB bekommen)
}

module.exports = function(app){
    
}