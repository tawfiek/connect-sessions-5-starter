import { NextFunction, Request, Response } from "express";

export default function errorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.error(err);
    return res.status(500).json({ message: 'Something went wrong!' });
}
