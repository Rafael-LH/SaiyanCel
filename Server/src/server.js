// server
const express = require('express')
const app = express();
const PORT = 3000
const cors = require('cors')

//Config express
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.set('port', 3000)

const router = require('./network/routes')
router(app)

// Connected data base
const { mysqlConnect } = require('./database')
mysqlConnect();

app.listen(app.get('port'), () => {
  console.log(`La Aplicacion esta escuchando en http://localhost:${PORT}`)
})