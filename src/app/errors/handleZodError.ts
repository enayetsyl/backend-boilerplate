import { ZodError, ZodIssue } from 'zod';
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

// You can read the following blog to learn more about the code https://dev.to/md_enayeturrahman_2560e3/how-to-handle-errors-in-an-industry-grade-nodejs-application-217b

// Todo without further modification you can use the code. If you want to customize the error message then you can do so. 

const handleZodError = (err: ZodError): TGenericErrorResponse => {
  const errorSources: TErrorSources = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue.message,
    };
  });

  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorSources,
  };
};

export default handleZodError;