import { NextFunction, Request, Response } from 'express';
import { ErrorFormatter, validationResult } from 'express-validator';
import { StatusCodes } from 'http-status-codes';

export const validateDataHelper = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error: unknown) {
    const err = error as ErrorFormatter;
    res.status(StatusCodes.FORBIDDEN).json({
      errors: err,
    });
    return;
  }
};
