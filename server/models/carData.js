const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carDataSchema = new Schema({
    id: String,
    timestamps: {
        //TODO
        type: { String, String},
        type: { String, String},
        type: { String, String},
        type: { String, String},
        type: { String, String},
        type: { String, String},
        type: { String, String},
        type: { String, String}
    },

});

// create model class

const ModelClass = mongoose.model('carData', carDataSchema);

//export the model
exports.model = ModelClass;
