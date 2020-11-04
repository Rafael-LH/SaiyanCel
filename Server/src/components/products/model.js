const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const products = require('../../database/schemas/products')
class Model {
  constructor() {
    this.categories = 'categories'
  }
  Categories() {
    const MySchema = new Schema({
      name: String
    })
    const model = mongoose.model(this.categories, MySchema)
    return model
  }
  Products() {
    const model = products()
    return model
  }
}
module.exports = new Model()
