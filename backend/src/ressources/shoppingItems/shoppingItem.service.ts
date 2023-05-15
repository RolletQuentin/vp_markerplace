import { Request, Response } from "express";

const ShoppingItem = require("../../models/ShoppingItem");

export default class ShoppingItemService {
    async findAll(req: Request, res: Response) {
        return ShoppingItem.find({})
            .then((shoppingItem: typeof ShoppingItem) =>
                res.status(200).json({ shoppingItem })
            )
            .catch((error: any) => res.status(400).json({ error }));
    }

    async create(req: Request, res: Response) {
        delete req.body._id;
        const shoppingItem = new ShoppingItem({ ...req.body });
        return shoppingItem
            .save()
            .then((shoppingItem: typeof ShoppingItem) =>
                res.status(201).json({ shoppingItem })
            )
            .catch((error: any) => res.status(400).json({ error }));
    }

    async findOne(req: Request, res: Response) {
        return ShoppingItem.findOne({ _id: req.params.id })
            .then((shoppingItem: typeof ShoppingItem) =>
                res.status(200).json({ shoppingItem })
            )
            .catch((error: any) => res.status(404).json({ error }));
    }

    async delete(req: Request, res: Response) {
        return ShoppingItem.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: "Object deleted" }))
            .catch((error: any) => res.status(400).json({ error }));
    }

    async modifyOne(req: Request, res: Response) {
        return ShoppingItem.updateOne(
            { _id: req.params.id },
            { ...req.body, _id: req.params.id }
        )
            .then(() => res.status(200).json({ message: "Object modified" }))
            .catch((error: any) => res.status(400).json({ error }));
    }
}
