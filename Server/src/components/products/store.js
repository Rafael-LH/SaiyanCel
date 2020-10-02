const Model = require('./model')

class Store {
  constructor() {
    this.SchemaCategories = Model.Categories()
  }

  async getCategories() {
    return await this.SchemaCategories.find()
  }
}
module.exports = new Store()
