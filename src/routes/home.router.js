import { Router } from "express";
import homeController from "../controllers/home.controller.js";
const app = Router()

app.get('/', homeController.home)
app.post('/', homeController.question)
export default app