import { Schema, model } from "mongoose";

const ShoppingItem = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    cover: { type: String, required: true },
    category: { type: String, required: true },
    shortDescription: { type: String, required: true },
    longDescription: { type: String, required: true },
});

module.exports = model("ShopingItem", ShoppingItem);
