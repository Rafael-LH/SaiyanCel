// server
const express = require('express')
const app = express();
const PORT = 3000
const cors = require('cors')
const { logError, wrapErrors, clientErrorHandler } = require('./utils/middleware/errorsHandlers')

//Config express
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.set('port', 3000)

const router = require('./network/routes')
router(app)

// Connected data base
const connect = require('./database')
connect();

// Error Handler
app.use(logError)
app.use(wrapErrors)
app.use(clientErrorHandler)

app.listen(app.get('port'), () => {
  console.log(`La Aplicacion esta escuchando en http://localhost:${PORT}`)
})