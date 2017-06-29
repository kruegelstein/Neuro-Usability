const CarData = require('../models/carData');


exports.getCars = function(req, res, next){
    res.send({success:'true'});
}

exports.getCarData = function(req, res, next){
    const carName = req.body.name;
    CarData.findOne({name:carName}, function(err, carData){
        if(err) {return next(err);}

        if(!carData){
            return res.status(422).send({error: 'Car does not exist'});
        }

    })
}
