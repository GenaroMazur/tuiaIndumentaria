import {readFileSync} from "fs"
import {join} from "path"
import express from "express"
import cors from "cors"
import morgan from "morgan"
import { createServer, Server } from "http"
import { conectFirebase } from "./database/firebase"

export class Core {

    public app: express.Application
    private http: Server


    private static _instance: Core
    public static get instance() { return this._instance || (this._instance = new this()) }

    constructor() {
        this.app = express()
        this.http = createServer(this.app)
    }

    public async start(){
        require("dotenv").config()
        const {PORT, JWTSECRET, BCRYPTSALT, URLDB} = process.env
        const CREDENTIALSDB = readFileSync(join(__dirname,"./../tokenFirebase.js"),"utf-8") || undefined
        if(!PORT || !JWTSECRET || !BCRYPTSALT || !CREDENTIALSDB || !URLDB) throw new Error("=============== Faltan variables de entorno ===============")
        if(isNaN(parseInt(BCRYPTSALT))) throw new Error("=============== la variable BCRYPT debe ser un numero entero ===============")

        this.http.listen(PORT, ()=>console.log(`=============== Servidor en \x1b[32mlinea\x1b[0m Puerto ${PORT} ===============`))


        this.app.use(morgan("dev"))
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({"extended":false}))
        conectFirebase(URLDB,CREDENTIALSDB)
    }

    public close(err?:Error){
        if(err){
            console.error("Hubo un error con el servidor")
            console.error(err)
            this.http.close()
        }
    }
}