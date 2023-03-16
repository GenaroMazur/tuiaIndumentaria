"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authController_1 = require("../controllers/authController");
const express_1 = require("express");
const userChain_1 = require("../middlewares/userChain");
const validateHandler_1 = __importDefault(require("../middlewares/validateHandler"));
const router = (0, express_1.Router)();
router.post("/login", userChain_1.loginChain, validateHandler_1.default, authController_1.login);
router.post("/register", userChain_1.registerChain, validateHandler_1.default, authController_1.register);
exports.default = router;
