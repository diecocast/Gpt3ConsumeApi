import express from "express";
import homeRouters from "./controllers/home.controller.js";

const app = express()
const PORT = process.env.PORT||8080

const server = app.listen(PORT, ()=> console.log(`Listening on PORT ${8080}`))

app.get('/', homeRouters);