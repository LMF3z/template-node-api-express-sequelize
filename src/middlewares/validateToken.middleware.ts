import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { verifyToken } from 'helpers/handleTokens.helpers';

export const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;

    if (authorization === undefined) {
      res.status(StatusCodes.UNAUTHORIZED).json({
        message: 'No tiene permisos para realizar esta acción',
        data: [],
        access: false,
      });

      return;
    }

    const getToken = authorization.split(' ')[1];

    const isValidToken = await verifyToken(getToken);

    if (!isValidToken) {
      res.status(StatusCodes.UNAUTHORIZED).json({
        message: 'No tiene permisos para realizar esta acción',
        data: [],
        access: false,
      });

      return;
    }

    next();
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'No tiene permisos para realizar esta acción' });
  }
};
