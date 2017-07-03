const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
  name: String,
  timestamps: { type: Schema.Types.Mixed }
})

const ModelClass = mongoose.model('cars', userSchema)

module.exports = ModelClass
