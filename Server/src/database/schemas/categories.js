const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categoriesSchema = new Schema({
  category: String,
  type: String,
})
module.exports = mongoose.model('categories', categoriesSchema)