const SchemaOffers = require('../../database/schemas/products')
const SchemaCategories = require('../../database/schemas/categories')

class Model {
  constructor() { }
  async getCategories() {
    const categories = await SchemaCategories.find()
    return categories
  }
  async get({ tags }) {
    const query = tags ? { tags: { $in: tags } } : {}
    const products = await SchemaOffers.find(query)
    return products
  }
}
module.exports = new Model()
