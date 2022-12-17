import jwt from 'jsonwebtoken';

/**
 *
 * @param dataToToken data to use to generate token
 * @returns new token
 */
export const signToken = (dataToToken: any): string =>
  jwt.sign(dataToToken, process.env.JWT_SECRET!, {
    expiresIn: '1d',
  });

/**
 *
 * @param token String
 * @returns boolean correct token or not
 */
export const verifyToken = (token: string) =>
  jwt.verify(token, process.env.JWT_SECRET!);
