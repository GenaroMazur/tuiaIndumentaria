import { compareSync } from "bcrypt";
import { body } from "express-validator/src/middlewares/validation-chain-builders";
import app from "firebase-admin/firestore"

const User = app.getFirestore().collection("User")

export const loginChain = [
    body("email")
        .notEmpty().withMessage("El campo 'email' no debe estar vacio").bail()
        .isEmail().withMessage("El campo 'email' debe ser un correo valido").bail()
        .custom(async(value:string,{req})=>{
            const user = await User.doc(value).get()
            if(!user.exists)throw new Error("Email inexistente")
            const data = user.data()
            console.log(data)
            req.body.dataDb=data
            return true
        }),
    body("password")
        .notEmpty().withMessage("El campo 'password' no debe estar vacio").bail()
        .custom(async(value:string,{req})=>{
            if(!req.body.dataDb)return true
            if(!compareSync(value,req.body.dataDb.password)) throw new Error("Contraseña invalida");
            return true
        })
]

export const registerChain = []