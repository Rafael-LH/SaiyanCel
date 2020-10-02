const db = require('mongoose');
const { db_user, db_password, db_host, db_name } = require('../config')

//  Nos ayuda para no tener problemas en la coneccion caso de que db_user o db_password contengan caracteres especiales 
const user = encodeURIComponent(db_user)
const password = encodeURIComponent(db_password)
const MONGO_URI = `mongodb+srv://${user}:${password}@${db_host}/${db_name}?retryWrites=true&w=majority`

db.Promise = global.Promise;
const connect = async () => {
  await db.connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true, // para no tener probleman de compatibilidad
  })
    .then((_) => console.log('DB conected!!'))
    .catch(err => console.log(`has ocurred and error with connection ${err}`))
}
module.exports = connect;