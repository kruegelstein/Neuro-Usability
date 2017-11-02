const User = require('./controllers/user.js');

module.exports = function(app){
    app.post('/addUser', User.add);
}
