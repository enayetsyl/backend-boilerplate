import { Response } from 'express';

// Todo you can change the type and json response as per your requirement. It will be used in the controller function to send response to the frontend. It will make you code more cleaner.  Read my following blog for deeper understanding https://dev.to/md_enayeturrahman_2560e3/creating-a-custom-send-response-utility-function-in-express-2fg9

type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  meta?: TMeta;
  data: T;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data?.statusCode).json({
    success: data.success,
    message: data.message,
    meta: data.meta,
    data: data.data,
  });
};

export default sendResponse;