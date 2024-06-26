import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';
import catchAsync from '../utils/catchAsync';

// Todo. Understand the code. It is a middleware. You will use it in the route file. It will check the req.body and cookies and match with zod validation schema mentioned in the module folder of the respective route. If data matched with the zod schema then it will call next function to perform remaining task. Otherwise it will send error to the frontend. You can read the following blog for a deep understanding. https://dev.to/md_enayeturrahman_2560e3/how-to-create-api-in-an-industry-standard-app-44ck

const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    await schema.parseAsync({
      body: req.body,
      cookies: req.cookies,
    });

    next();
  });
};

export default validateRequest;