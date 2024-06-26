import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config';

// Todo if you want understand the code read my following two blogs https://dev.to/md_enayeturrahman_2560e3/how-to-handle-errors-in-an-industry-grade-nodejs-application-217b https://dev.to/md_enayeturrahman_2560e3/how-to-set-up-eslint-and-prettier-1nk6 

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    server = app.listen(config.port, () => {
      console.log(`app is listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

process.on('unhandledRejection', (err) => {
  console.log(`😈 unahandledRejection is detected , shutting down ...`, err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log(`😈 uncaughtException is detected , shutting down ...`);
  process.exit(1);
});