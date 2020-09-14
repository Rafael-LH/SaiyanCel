const express = require('express')
const router = express()
const { sendResponse } = require('../../network/sendResponse')
const Model = require('./model')

router.get('/', async (req, res, next) => {
  try {
    const data = await Model.getProducts()
    sendResponse({ res, status: 200, message: 'Get Data', result: data })
  } catch (err) {
    sendResponse({ res, status: 500, message: err, result: {}, error: err })
  }
})
module.exports = router