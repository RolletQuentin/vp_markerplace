import { Request, Response, Router } from "express";
import AdminService from "./admin.service";

const AdminController = Router();
const service = new AdminService();

// AdminController.post("/signup", service.signup);
AdminController.post("/login", service.login);
AdminController.post("/signup", service.signup);

export { AdminController };
