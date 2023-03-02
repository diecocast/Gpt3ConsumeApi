import express from "express";
import homeRouters from "./routes/home.router.js";
import __dirname from "./utils.js";

const app = express()
const PORT = process.env.PORT||8080
app.use(express.static(__dirname + '/public'));
app.use(express.json());
const server = app.listen(PORT, ()=> console.log(`Listening on PORT ${8080}`))

app.use('/', homeRouters);