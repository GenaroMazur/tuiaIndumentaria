import { NextFunction, Request, Response, Router } from "express";
const router = Router()

router.use("/",async(req:Request, res:Response, next:NextFunction)=>{
    res.status(200).json({message:"OK"})
})

import authRouter from "./auth.routes"
router.use("/auth", authRouter)

import userRouter from "./user.routes"
router.use("/users", userRouter)

import productsRouter from "./products.routes"
router.use("/products",productsRouter)

import dashboardRouter from "./dashboard.routes"
router.use("/dashboard",dashboardRouter)

import newsRouter from "./news.routes"
router.use("/news", newsRouter)

export default router