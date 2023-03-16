import { validationResult } from "express-validator";
import { NextFunction, Request, Response } from "express";

const validationHandlerMiddleware =async (req:Request, res:Response, next:NextFunction) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        res.status(400).json({message:"Error de validacion",...errors.mapped()})
    } else {
        return next()
    }
}

export default validationHandlerMiddleware