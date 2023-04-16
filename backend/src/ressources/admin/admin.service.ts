import { Request, Response } from "express";

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../models/User");

export default class AdminService {
    async signup(req: Request, res: Response) {
        bcrypt
            .hash(req.body.password, 10)
            .then((hash: string) => {
                const user = new User({
                    email: req.body.email,
                    password: hash,
                });
                user.save()
                    .then(() =>
                        res.status(201).json({ message: "Utilisateur créé !" })
                    )
                    .catch((error: any) => res.status(400).json({ error }));
            })
            .catch((error: any) => res.status(500).json({ error }));
    }

    async login(req: Request, res: Response) {
        User.findOne({ email: req.body.email })
            .then((user: any) => {
                if (!user) {
                    return res.status(401).json({
                        message: "Paire login/mot de passe incorrecte",
                    });
                }
                bcrypt
                    .compare(req.body.password, user.password)
                    .then((valid: boolean) => {
                        if (!valid) {
                            return res.status(401).json({
                                message: "Paire login/mot de passe incorrecte",
                            });
                        }
                        res.status(200).json({
                            userId: user._id,
                            token: jwt.sign(
                                { userId: user._id },
                                "RANDOM_TOKEN_SECRET",
                                { expiresIn: "24h" }
                            ),
                        });
                    })
                    .catch((error: any) => res.status(500).json({ error }));
            })
            .catch((error: any) => res.status(500).json({ error }));
    }
}
