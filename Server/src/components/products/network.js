const express = require('express')
const router = express()
const { sendResponse } = require('../../network/sendResponse')
const Model = require('./Model')

router.get('/categories', async (req, res, next) => {
  try {
    const data = await Model.getCategories()
    sendResponse({ res, status: 200, message: 'Get Data', result: data })
  } catch (err) {
    next(err)
  }
})
router.get('/', async (req, res, next) => {
  try {
    const data = await Model.get(req.query)
    sendResponse({ res, status: 200, message: 'Get offers', result: data })
  } catch (err) {
    next(err)
  }
})
module.exports = router