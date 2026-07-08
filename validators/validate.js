import { validationResult } from "express-validator";
import { ValidationError } from "../errors/validation.js";


export const validate = (req,res,next) =>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return next(new ValidationError("validation error", errors.array()));
    }
    next();
};
