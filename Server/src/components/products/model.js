const mongoose = require('mongoose')
const Schema = mongoose.Schema;

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
}
module.exports = new Model()
