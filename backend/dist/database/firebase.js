"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conectFirebase = void 0;
const app_1 = require("firebase-admin/app");
const credential_factory_1 = require("firebase-admin/lib/app/credential-factory");
const conectFirebase = (URL, CREDENTIALSDB) => {
    (0, app_1.initializeApp)({
        "credential": (0, credential_factory_1.refreshToken)(CREDENTIALSDB),
        "databaseURL": URL
    });
    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
};
exports.conectFirebase = conectFirebase;
