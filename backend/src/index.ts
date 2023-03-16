import { Core } from "./server";
import indexRouter from "./routes/index.routes"
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

const server = Core.instance;

(async()=>{
    try {
        await server.start()

        server.app.use("/v1/api",indexRouter)
        server.app.use((req, res, next)=>{
            res.status(404).json({"message":"ruta inexistente"})
        })
        server.app.use((err:ErrorRequestHandler,req:Request,res:Response,next:NextFunction)=>{
            console.error(err)
            res.status(500).json({message:"Opss, Sucedio un problema con el servidor"})
        })
        
    } catch (error:any) {
        server.close(error)
    }
})()