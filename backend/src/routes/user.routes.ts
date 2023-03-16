import { Router } from "express";
import { userDelete, userDetail, userList, userUpdate } from "../controllers/usersController";
const router = Router()

router.route("/")
    .get(userList)
router.route("/:userId")
    .get(userDetail)
    .put(userUpdate)
    .delete(userDelete)

export default router