import { Router } from "express";
import { productCreate, productDelete, productList, productUpdate } from "../controllers/productsControllers";
const router = Router()

router.route("/")
    .get(productList)
    .post(productCreate)
router.route("/:productId")
    .get(productList)
    .put(productUpdate)
    .delete(productDelete)

export default router