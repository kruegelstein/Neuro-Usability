var MongoClient = require('mongodb').MongoClient;

exports.func1 = function(req, res, next){
  console.log('On the right path....');
  const id = req.body.id;
  const count = req.body.count;
  const entry = { user: id, count: count };

  MongoClient.connect("mongodb://localhost:27017/test", function (err, db) {
    if(err){
      return next(err)
    }
    db.collection('test').insert(entry, function(err, result) {
      if(err) {
        console.log('**********', err)
      }
      return
    });
    db.collection('test').find({ user: id }).toArray(function(err, result) {
      if(err) {
        console.log('**********', err)
      }
      console.log('#######', result)
    })
  });
}
