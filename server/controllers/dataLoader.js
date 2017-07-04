
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
    const carName = car[0].name
    const timestamps = car[0].timestamps
    const numOfAttributes = Object.keys(form).length
    let attributes = []
    let i = 0
    for (i; i < numOfAttributes; i++) {

      if(form[i].selected) {

        const getData = (name) => {
          let latKey = '1000000000100000001'
          let lngKey = '1000000000100000002'
          let headingKey = '1000000000100000004'
          let speedKey = '1000000000100000005'
          let oddeKey = '40080001'
          let odrKey = '40080002'
          let oddiKey = '40080003'
          let pfKey = '40108'
          let baKey = '40051'
          let data = []
          switch(name) {
            case 'Lat':
              Object.keys(timestamps).forEach(key => {
                timestamps[key].hasOwnProperty(latKey) ? data.push(Number(timestamps[key][latKey])) : data.push(null)
              })
              return data
            case 'Lng':
              Object.keys(timestamps).forEach(key => {
                timestamps[key].hasOwnProperty(latKey) ? data.push(Number(timestamps[key][latKey])) : data.push(null)
              })
              return data
            case 'Heading':
              Object.keys(timestamps).forEach(key => {
                timestamps[key].hasOwnProperty(latKey) ? data.push(Number(timestamps[key][latKey])) : data.push(null)
              })
              return data
            case 'Speed':
              Object.keys(timestamps).forEach(key => {
                timestamps[key].hasOwnProperty(latKey) ? data.push(Number(timestamps[key][latKey])) : data.push(null)
              })
              return data
            case 'simTD_ObjectDetection_Detected':
              Object.keys(timestamps).forEach(key => {
                timestamps[key].hasOwnProperty(latKey) ? data.push(Number(timestamps[key][latKey])) : data.push(null)
              })
              return data
            case 'simTD_ObjectDetection_RelativeSpeed':
              Object.keys(timestamps).forEach(key => {
                timestamps[key].hasOwnProperty(latKey) ? data.push(Number(timestamps[key][latKey])) : data.push(null)
              })
              return data
            case 'simTD_ObjectDetection_Distance':
              Object.keys(timestamps).forEach(key => {
                timestamps[key].hasOwnProperty(latKey) ? data.push(Number(timestamps[key][latKey])) : data.push(null)
              })
              return data
            case 'pedalForce':
              Object.keys(timestamps).forEach(key => {
                timestamps[key].hasOwnProperty(latKey) ? data.push(Number(timestamps[key][latKey])) : data.push(null)
              })
              return data
            case 'brakeActuation':
              Object.keys(timestamps).forEach(key => {
                timestamps[key].hasOwnProperty(latKey) ? data.push(Number(timestamps[key][latKey])) : data.push(null)
              })
              return data
            default:
              return data
          }
        }
        let attribute = {
          name: form[i].name,
          color: form[i].color,
          type: form[i].graph.toLowerCase(),
          data: getData(form[i].name)
        }
        attributes.push(attribute)
        console.log('1', attributes.length);
      }
      console.log('2', attributes.length);
      // attributes.push(attribute)
      // console.log('attributes length', attributes.length)
    }
    console.log('attributes befor sending', attributes.length);
    res.send(attributes)
  })
}
