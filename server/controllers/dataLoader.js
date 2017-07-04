
// exports.getCars = function(req, res, next){
//     res.send({success:'true'});
// }

const User = require('../models/user')

exports.getCarNames = function(req, res, next){
  User.find({}, { name: 1}, function(err, result) {
    if(err) {
      return next(err)
    }

    res.send(result)
  })
}

exports.buildSeries = function(req, res, next){
  const name = req.body.carName
  const form = req.body.form
  console.log('req.body', req.body);
  console.log('name', name);
  console.log('form', form);

  User.find({name: name}, {name: 1, timestamps: 1}, function(err, result){
    if(err){
      return next(err)
    }
    console.log('#######################################');
    const car = result
    const carName = car.name
    const timestamps = car.timestamps
    const numOfAttributes = Object.keys(form).length
    let i = 0
    for (i; i < numOfAttributes; i++) {
      let attributes = []
      if(form[i].selected) {

        let attribute = {
          carName: carName,
          name: form[i].name,
          color: form[i].color,
          type: form[i].graph.toLowerCase(),
          data: getData(),
          turboTreshold: 13000,
        }
      }
    }
    // res.send(result)
  })
}
