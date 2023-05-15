import { Router } from "express";
import RatingService from "./rating.service";

const RatingController = Router();
const auth = require("../../middlewares/auth");

const service = new RatingService();

RatingController.get("/", service.findAll);
RatingController.get("/:id", service.findOne);
RatingController.post("/", auth, service.create);
RatingController.delete("/:id", auth, service.delete);
RatingController.put("/:id", auth, service.modifyOne);

export { RatingController };
