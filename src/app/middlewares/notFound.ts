/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

// Todo, you have nothing to change here. Just keep it as it is. If user hit any route that is not defined in your app then he/she will get "API Not Found" message. If you want to change it can do it in the message section.

const notFound = (req: Request, res: Response, next: NextFunction) => {
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'API Not Found !!',
    error: '',
  });
};

export default notFound;