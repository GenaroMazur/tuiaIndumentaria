"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const newsController_1 = require("../controllers/newsController");
const route = (0, express_1.Router)();
route.route("/")
    .get(newsController_1.newsList)
    .post(newsController_1.newsCreate);
route.route("/:newsId")
    .get(newsController_1.newsDetail)
    .put(newsController_1.newsUpdate)
    .delete(newsController_1.newsDelete);
exports.default = route;
