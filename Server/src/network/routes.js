const express = require('express')

const products = require('../components/products/network')

const routes = (server) => {
  server.use('/api/products', products)
}
module.exports = routes