const SchemaOffers = require('../../database/schemas/products')
const SchemaCategories = require('../../database/schemas/categories')

class Model {
  constructor() { }
  async getCategories() {
    const categories = await SchemaCategories.find()
    return categories
  }
  getQuery(query) {
    let objQuery = {}
    const queryKey = Object.keys(query)
    const queryValues = Object.values(query)
    queryKey.forEach((item, index) => {
      if (item === 'tags') {
        objQuery.tags = { $in: queryValues[index] }
      } else {
        objQuery[item] = queryValues[index]
      }
    })
    return objQuery
  }
  async get(objQuery) {
    const query = this.getQuery(objQuery)
    const products = await SchemaOffers.find(query)
    return products
  }
}
module.exports = new Model()
