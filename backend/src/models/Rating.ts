import { Schema, model } from "mongoose";

const Rating = new Schema({
    name: { type: String, required: true },
    stars: { type: Number, required: true },
    comment: { type: String, required: true },
    shoppingItem: { type: Number, required: true },
});

module.exports = model("Rating", Rating);
