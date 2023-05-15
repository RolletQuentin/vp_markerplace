import { Router } from "express";
import ShoppingItemService from "./shoppingItem.service";

const ShoppingItemController = Router();
const auth = require("../../middlewares/auth");

const service = new ShoppingItemService();

ShoppingItemController.get("/", service.findAll);
ShoppingItemController.get("/:id", service.findOne);
ShoppingItemController.post("/", auth, service.create);
ShoppingItemController.delete("/:id", auth, service.delete);
ShoppingItemController.put("/:id", auth, service.modifyOne);

export { ShoppingItemController };
