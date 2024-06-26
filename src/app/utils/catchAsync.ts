import { NextFunction, Request, RequestHandler, Response } from 'express';

// Todo without further modification you can use the code. If you want to customize the error message then you can do so. If you use it you can avoid the use of try catch block. So your code will be more cleaner. You can read this blog to understand the code https://dev.to/md_enayeturrahman_2560e3/simplifying-error-handling-in-express-controllers-introducing-catchasync-utility-function-2f3l

// If you want to see its use check the validateRequest.ts file inside the middleware folder.
const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};

export default catchAsync;