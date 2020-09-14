require('dotenv')
const env = process.env;

const config = {
  host: env.MYSQL_HOST,
  user: env.MYSQL_USER,
  password: env.MYSQL_ROOT_PASSWORD,
  database: env.MYSQL_DATABASE
}
module.exports = config