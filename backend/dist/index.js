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
const server_1 = require("./server");
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const server = server_1.Core.instance;
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield server.start();
        server.app.use("/v1/api", index_routes_1.default);
        server.app.use((req, res, next) => {
            res.status(404).json({ "message": "ruta inexistente" });
        });
        server.app.use((err, req, res, next) => {
            console.error(err);
            res.status(500).json({ message: "Opss, Sucedio un problema con el servidor" });
        });
    }
    catch (error) {
        server.close(error);
    }
}))();
