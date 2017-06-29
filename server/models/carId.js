const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carIdSchema = new Schema({
    id: String,
    name: String
});

// create model class

const ModelClass = mongoose.model('carId', carIdSchema);

//export the model
exports.model = ModelClass;
