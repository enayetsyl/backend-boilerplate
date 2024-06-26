import dotenv from "dotenv";
dotenv.config();

// You can read the following blog to learn more about the code https://dev.to/md_enayeturrahman_2560e3/how-to-set-up-eslint-and-prettier-1nk6

export default {
  port: process.env.PORT,
  database_url: process.env.database_url,
  NODE_ENV: process.env.NODE_ENV,
  cloudinary_cloud_name:process.env.cloudinary_cloud_name,
  cloudinary_api_key:process.env.cloudinary_api_key,
cloudinary_api_secret:process.env.cloudinary_api_secret,
bcrypt_salt_rounds: process.env.bcrypt_salt_rounds
};
