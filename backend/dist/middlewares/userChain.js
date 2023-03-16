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
exports.registerChain = exports.loginChain = void 0;
const bcrypt_1 = require("bcrypt");
const validation_chain_builders_1 = require("express-validator/src/middlewares/validation-chain-builders");
const firestore_1 = __importDefault(require("firebase-admin/firestore"));
const User = firestore_1.default.getFirestore().collection("User");
exports.loginChain = [
    (0, validation_chain_builders_1.body)("email")
        .notEmpty().withMessage("El campo 'email' no debe estar vacio").bail()
        .isEmail().withMessage("El campo 'email' debe ser un correo valido").bail()
        .custom((value, { req }) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield User.doc(value).get();
        if (!user.exists)
            throw new Error("Email inexistente");
        const data = user.data();
        console.log(data);
        req.body.dataDb = data;
        return true;
    })),
    (0, validation_chain_builders_1.body)("password")
        .notEmpty().withMessage("El campo 'password' no debe estar vacio").bail()
        .custom((value, { req }) => __awaiter(void 0, void 0, void 0, function* () {
        if (!req.body.dataDb)
            return true;
        if (!(0, bcrypt_1.compareSync)(value, req.body.dataDb.password))
            throw new Error("Contraseña invalida");
        return true;
    }))
];
exports.registerChain = [];
