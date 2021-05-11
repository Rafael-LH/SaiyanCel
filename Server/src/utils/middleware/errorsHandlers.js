const boom = require('@hapi/boom')
const isRequestAjaxOrApi = require('../isRequestAjaxOrApi')

// Verify if we are in development
const withErrorStack = (err, stack) => {
  if (dev) {
    return { ...err, stack }
  } else {
    delete err.stack
    return err
  }
}
// Log error
const logError = (err, req, res, next) => {
  console.error(err);
  next(err)
}
// Wrap error if isnt handler error with boom
const wrapErrors = (err, req, res, next) => {
  if (!err.boom) {
    next(boom.badImplementation(err))
  }
  next(err)
}
// Errors for Ajax Request (XMLHttpRequest)
const clientErrorHandler = (err, req, res, next) => {
  // Errors for Ajax Request (all request by XMLHttpRequest) or if an error occurred while streaming
  if (isRequestAjaxOrApi(req) || res.headersSent) {
    const { output: { statusCode, payload } } = err
    res.status(statusCode).json(withErrorStack(payload, err.stack))
    next()
  } else {
    next(err)
  }
}
module.exports = {
  logError,
  wrapErrors,
  clientErrorHandler,
}