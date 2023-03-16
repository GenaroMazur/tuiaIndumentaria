import { NextFunction, Request, Response } from "express";


export const login =async (req:Request, res:Response, next:NextFunction) => {
    try {
        
    } catch (error) {
        console.error(error)
        next(error)
    }
}

export const register =async (req:Request, res:Response, next:NextFunction) => {
    try {
        
    } catch (error) {
        console.error(error)
        next(error)
    }
}