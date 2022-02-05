import {Request, Response, NextFunction} from 'express';


export function studentValidation(req: Request, res: Response, next: NextFunction) {
    const {email, name} = req.body;

    if (!email || !name) {
        return res.status(400).json({
            message: 'Email and name are required.'
        });
    } else if (email.length < 5 || name.length < 5) {
        return res.status(400).json({
            message: 'Email and name must be at least 5 characters long.'
        });
    } else {
        next();
    }

}