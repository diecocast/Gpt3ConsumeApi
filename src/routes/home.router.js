import { Router } from "express";
import homeController from "../controllers/home.controller.js";
const app = Router()

app.get('/', homeController.home)

export default app