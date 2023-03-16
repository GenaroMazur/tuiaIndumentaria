"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
const router = (0, express_1.Router)();
router.route("/")
    .get(usersController_1.userList);
router.route("/:userId")
    .get(usersController_1.userDetail)
    .put(usersController_1.userUpdate)
    .delete(usersController_1.userDelete);
exports.default = router;
