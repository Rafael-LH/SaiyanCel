const Model = require('./model')
const SchemaOffers = require('../../database/schemas/products')

class Store {
  constructor() {
    this.SchemaCategories = Model.Categories()
  }

  async getCategories() {
    return await this.SchemaCategories.find()
  }
  async getOffers() {
    return await SchemaOffers.find()
  }
}
module.exports = new Store()
