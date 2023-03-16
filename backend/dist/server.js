"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const http_1 = require("http");
const firebase_1 = require("./database/firebase");
class Core {
    static get instance() { return this._instance || (this._instance = new this()); }
    constructor() {
        this.app = (0, express_1.default)();
        this.http = (0, http_1.createServer)(this.app);
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            require("dotenv").config();
            const { PORT, JWTSECRET, BCRYPTSALT, URLDB } = process.env;
            const CREDENTIALSDB = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, "./../tokenFirebase.js"), "utf-8") || undefined;
            if (!PORT || !JWTSECRET || !BCRYPTSALT || !CREDENTIALSDB || !URLDB)
                throw new Error("=============== Faltan variables de entorno ===============");
            if (isNaN(parseInt(BCRYPTSALT)))
                throw new Error("=============== la variable BCRYPT debe ser un numero entero ===============");
            this.http.listen(PORT, () => console.log(`=============== Servidor en \x1b[32mlinea\x1b[0m Puerto ${PORT} ===============`));
            this.app.use((0, morgan_1.default)("dev"));
            this.app.use((0, cors_1.default)());
            this.app.use(express_1.default.json());
            this.app.use(express_1.default.urlencoded({ "extended": false }));
            (0, firebase_1.conectFirebase)(URLDB, CREDENTIALSDB);
        });
    }
    close(err) {
        if (err) {
            console.error("Hubo un error con el servidor");
            console.error(err);
            this.http.close();
        }
    }
}
exports.Core = Core;
