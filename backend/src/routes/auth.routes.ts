import { login, register } from "../controllers/authController";
import { Router } from "express";
import { loginChain, registerChain } from "../middlewares/userChain";
import validationHandlerMiddleware from "../middlewares/validateHandler";
const router = Router()

router.post("/login", loginChain, validationHandlerMiddleware, login)
router.post("/register", registerChain, validationHandlerMiddleware, register)

export default router