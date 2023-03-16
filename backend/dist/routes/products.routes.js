"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsControllers_1 = require("../controllers/productsControllers");
const router = (0, express_1.Router)();
router.route("/")
    .get(productsControllers_1.productList)
    .post(productsControllers_1.productCreate);
router.route("/:productId")
    .get(productsControllers_1.productList)
    .put(productsControllers_1.productUpdate)
    .delete(productsControllers_1.productDelete);
exports.default = router;
