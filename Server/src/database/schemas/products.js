const mongoose = require('mongoose')

const dataTypes = mongoose.Schema.Types

const details = mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  discount: Number,
  stock: Number,
  storage: Number
})
const products = mongoose.Schema({
  id: dataTypes.ObjectId,
  category: String,
  image: String,
  details: details,
})
module.exports = mongoose.model('products', products);