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
const express_1 = require("express");
const router = (0, express_1.Router)();
router.use("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: "OK" });
}));
const auth_routes_1 = __importDefault(require("./auth.routes"));
router.use("/auth", auth_routes_1.default);
const user_routes_1 = __importDefault(require("./user.routes"));
router.use("/users", user_routes_1.default);
const products_routes_1 = __importDefault(require("./products.routes"));
router.use("/products", products_routes_1.default);
const dashboard_routes_1 = __importDefault(require("./dashboard.routes"));
router.use("/dashboard", dashboard_routes_1.default);
const news_routes_1 = __importDefault(require("./news.routes"));
router.use("/news", news_routes_1.default);
exports.default = router;
