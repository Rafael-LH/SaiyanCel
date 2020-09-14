const mysql = require('mysql')
const { host, user, password, database } = require('../config')

const connection = mysql.createConnection({
  host,
  user,
  password,
  database
})
function mysqlConnect() {
  connection.connect((error) => {
    if (error) {
      console.log(`Error ${error}`);
      return false;
    }
    console.log('Database connected...');
  })
}
function connectDestroy() {
  connection.destroy();
}
function query(query, params) {
  return new Promise((resolve, reject) => {
    connection.query(query, params, (error, results, fields) => {
      if (error) {
        reject(error)
      } else {
        const converToString = JSON.stringify(results)
        resolve(JSON.parse(converToString)) // Convert in JSON
      }
    })
  })
}
module.exports = {
  mysqlConnect,
  connectDestroy,
  query
};