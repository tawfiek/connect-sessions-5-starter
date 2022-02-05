// TODO: Implement middleware for student validation.
import { NextFunction ,Request ,Response } from 'express'
import * as validator from 'express-validator'

const validate = (req:Request ,res: Response , next:NextFunction)=>{
if (!req.body.email && !validator.body(req.body.email).isEmail) {
    res.status(400).json({message:'email is not valid'})
    next()
}
}

export default validate