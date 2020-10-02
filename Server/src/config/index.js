require('dotenv')
const env = process.env;

const config = {
  db_user: env.DB_USER,
  db_password: env.DB_PASSWORD,
  db_host: env.DB_HOST,
  db_name: env.DB_NAME
}
module.exports = config