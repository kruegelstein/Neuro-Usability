
// is used to import cardata user = car

const User = require('../models/user')

exports.signup = function(req, res, next) {
  console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
  const name = req.body.name
  const timestamps = req.body.timestamps

  User.findOne({name:name}, function(err, existingUser) {
    if(err) {return next(err)}

    if(existingUser) {
      return res.status(422).send({error: 'email in use'})
    }

    const user = new User ({
      name: name,
      timestamps: timestamps
    })

    user.save(function(err) {
      if(err) {return next(err)}

      res.json(user)
    })
  })
}
