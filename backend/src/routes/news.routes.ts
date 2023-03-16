import { Router } from "express";
import { newsCreate, newsDelete, newsDetail, newsList, newsUpdate } from "../controllers/newsController";
const route = Router()

route.route("/")
    .get(newsList)
    .post(newsCreate)
route.route("/:newsId")
    .get(newsDetail)
    .put(newsUpdate)
    .delete(newsDelete)

export default route