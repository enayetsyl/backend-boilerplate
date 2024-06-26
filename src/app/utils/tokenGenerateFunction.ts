import jwt, { JwtPayload } from 'jsonwebtoken';

// Todo. This is custom make function to create and verify token. If you need to generate and verify token in more than one place then you can use it. In the jwtPayload i used userId and role. You may use different thing. Adjust the code accordingly.

export const createToken = (
  jwtPayload: { userId: string; role: string },
  secret: string,
  expiresIn: string,
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
};

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as JwtPayload;
};