const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const products = new Schema({
  category: String,
  brand: String,
  type: String,
  image: String,
  details: {
    name: String,
    description: String,
    price: Number,
    discount: Number,
    stock: Number,
    storage: Number,
  },
  tags: Array
})
module.exports = mongoose.model('products', products);