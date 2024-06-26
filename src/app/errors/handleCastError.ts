import mongoose from 'mongoose';
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

// You can read the following blog to learn more about the code https://dev.to/md_enayeturrahman_2560e3/how-to-handle-errors-in-an-industry-grade-nodejs-application-217b

// Todo without further modification you can use the code. If you want to customize the error message then you can do so. 

const handleCastError = (
  err: mongoose.Error.CastError,
): TGenericErrorResponse => {
  const errorSources: TErrorSources = [
    {
      path: err.path,
      message: err.message,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: 'Invalid ID',
    errorSources,
  };
};

export default handleCastError;