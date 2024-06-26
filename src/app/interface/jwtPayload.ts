import { JwtPayload } from 'jsonwebtoken';

// Todo. This code will be use full if you add user property inside the req object of express. For authentication purpose you may require it. If you cannot understand it then delete the file. 

declare global {
  namespace Express {
    interface Request {
      user: JwtPayload;
    }
  }
}