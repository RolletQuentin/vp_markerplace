import { Request, Response } from "express";

const Rating = require("../../models/Rating");

export default class RatingService {
    async findAll(req: Request, res: Response) {
        return Rating.find({})
            .then((rating: typeof Rating) => res.status(200).json({ Rating }))
            .catch((error: any) => res.status(400).json({ error }));
    }

    async create(req: Request, res: Response) {
        delete req.body._id;
        const rating = new Rating({ ...req.body });
        return Rating.save()
            .then((rating: typeof Rating) => res.status(201).json({ Rating }))
            .catch((error: any) => res.status(400).json({ error }));
    }

    async findOne(req: Request, res: Response) {
        return Rating.findOne({ _id: req.params.id })
            .then((rating: typeof Rating) => res.status(200).json({ Rating }))
            .catch((error: any) => res.status(404).json({ error }));
    }

    async delete(req: Request, res: Response) {
        return Rating.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: "Object deleted" }))
            .catch((error: any) => res.status(400).json({ error }));
    }

    async modifyOne(req: Request, res: Response) {
        return Rating.updateOne(
            { _id: req.params.id },
            { ...req.body, _id: req.params.id }
        )
            .then(() => res.status(200).json({ message: "Object modified" }))
            .catch((error: any) => res.status(400).json({ error }));
    }
}
