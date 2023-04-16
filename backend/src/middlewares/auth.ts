import { NextFunction, Request, Response } from "express";

const jwt = require("jsonwebtoken");

module.exports = (req: any, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
        const userId = decodedToken.userId;
        req.auth = {
            userId: userId,
        };
        next();
    } catch (error: any) {
        res.status(401).json({ error });
    }
};
