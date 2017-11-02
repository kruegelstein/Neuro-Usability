var MongoClient = require('mongodb').MongoClient;

exports.add = function(req, res, next){
  console.log('On the right path....');
  const id = req.body.id;
  const name = req.body.name;
  const entry = { user: id, name: name };

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
