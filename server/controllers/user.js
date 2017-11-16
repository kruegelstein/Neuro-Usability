var MongoClient = require('mongodb').MongoClient;

exports.addUser = function(req, res, next){
  console.log('Adding a user to the database....');
  const id = req.body.id;
  const name = req.body.name;
  const entry = { user: id, name: name, interactions: {} };

  MongoClient.connect("mongodb://localhost:27017/neuro", function (err, db) {
    if(err){
      return next(err)
    }
    db.collection('data').insert(entry, function(err, result) {
      if(err) {
        console.log('**********', err)
      }
      res.send({ id: id, name: name })
    });
  });
}

exports.addColor = function(req, res, next){
  console.log('Adding a color to the database....');
  const user = req.body.user;
  const color = req.body.color;
  const query = { "id": user }
  const entry = {
    $set: {
      interactions: {
       color: color
     }
   }
 };

  MongoClient.connect("mongodb://localhost:27017/neuro", function (err, db) {
    if(err){
      return next(err)
    }
    db.collection('data').update(query, entry, function(err, result) {
      if(err) {
        console.log('**********', err)
      }
      console.log(result)
      res.send()
    });
  });
}
