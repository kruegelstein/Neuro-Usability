const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Model TODO
const carSchema = new Schema({
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
    name: String
});

// create model class

const ModelClass = mongoose.model('car', carSchema);
exports.model = ModelClass;
