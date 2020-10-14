require('dotenv')
const env = process.env;

const config = {
  db_user: env.DB_USER,
  db_password: env.DB_PASSWORD,
  db_host: env.DB_HOST,
  db_name: env.DB_NAME,
  apiKey: env.API_KEY,
  authDomain: env.AUTH_DOMAIN,
  databaseURL: env.DATA_BASE_URL,
  projectId: env.PROJECT_ID,
  storageBucket: env.STORAGE_BUCKET,
  messagingSenderId: env.MESSAGIND_SENDER_ID,
  appId: env.APP_ID,
}
module.exports = config