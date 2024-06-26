/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './app/routes';
import notFound from './app/middlewares/notFound';
import globalErrorHandler from './app/middlewares/globalErrorhandler';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));

// application routes
app.use('/api/v1', router); // /api/v1 will prefix all the route. This is the connection with the index.ts file inside the routes folder. 

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from boiler plate code');
});

app.use(globalErrorHandler);  // This is connected with the globalErrorhandler.ts file at the middleware folder.

//Not Found
app.use(notFound);  // This is connected with the notFound.ts file at the middleware folder.

export default app;