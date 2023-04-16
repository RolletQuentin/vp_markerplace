import { Request, Response, NextFunction } from "express";
import { ExceptionsHandler } from "./middlewares/exceptions.handler";
import { UnknownRoutesHandler } from "./middlewares/unknownRoutes.handler";
import { AdminController } from "./ressources/admin/admin.controller";

const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
var connectiondb = "";

mongoose.set("strictQuery", false);
fs.exists("config.json", (doesExists: boolean) => {
    if (doesExists) {
        const file = fs.readFileSync("config.json");
        const config = JSON.parse(file);
        connectiondb = config.connectiondb;
        mongoose
            .connect(connectiondb, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => console.log("Connexion à MongoDB réussie !"))
            .catch((err: any) => {
                console.log("Connexion à MongoDB échouée !");
                console.log(err);
            });
    } else {
        console.log("Missing config file");
    }
});

// Pour récupéré toute les requetes qui sont au format json
// => met à disposition le body sur l'objet req
app.use(express.json());

// Permet de faire des requetes sécurisés
app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

app.use("/api/auth", AdminController);

// Pour toute les routes non définie, on renvoie une erreur
app.all("*", UnknownRoutesHandler);

// Gestion des erreurs
app.use(ExceptionsHandler);

module.exports = app;
