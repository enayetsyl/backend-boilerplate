// This file define the type for error sources and error response that is used in the handle cast error, handle duplicate error, handle validation error and in handle zod error file. 


// You can read the following blog to learn more about the code https://dev.to/md_enayeturrahman_2560e3/how-to-handle-errors-in-an-industry-grade-nodejs-application-217b

// Todo without further modification you can use the code.

export type TErrorSources = {
  path: string | number;
  message: string;
}[];

export type TGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorSources: TErrorSources;
};