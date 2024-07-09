import dotenv from 'dotenv';
import path from 'path';


// eslint-disable-next-line no-undef
dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  
  // eslint-disable-next-line no-undef
  port: process.env.PORT,
  
  // eslint-disable-next-line no-undef
  database_url: process.env.DB_URL,
// eslint-disable-next-line no-undef
bcrypt_salt_round: process.env.BCRYPT_SALT_ROUNDS,
 default_pass: process.env.DEFAULT_PASS,
};