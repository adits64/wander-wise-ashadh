import { body } from "express-validator";
import User from "../models/user.js";

export const createUserValidator = [
    body("name")
        .notEmpty()
        .withMessage("Name is required")
        .isAlpha()
        .withMessage()
        .isLength({min: 3})
        .withMessage("Name must be at least 3 character long")
        .trim()
        .escape(),
    body("email")
        .notEmpty()
        .withMessage("Email is Require")
        .isEmail()
        .withMessage("Invalid email format")
        .trim()
        .escape()
        .custom(async(value) => {
            const user = await User.findOne({email : value});
            if(user){
                throw new Error("Email already in use");
            }
            return true;
        }),
    body("password")
        .notEmpty()
        .withMessage("password is required")
        .isLength({min: 6})
        .withMessage("password must be atleast 6 charecter"),
]