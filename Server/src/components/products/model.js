const { query } = require('../../database')

class Model {
  constructor() {
    this.Categories = 'Categories'
    this.query = query
  }

  getProducts() {
    return new Promise(async (resolve, reject) => {
      try {
        const query = `SELECT * FROM ${this.Categories}`
        const data = await this.query(query, [])
        resolve(data)
      } catch (err) {
        reject(err)
      }
    })
  }

}
module.exports = new Model() 