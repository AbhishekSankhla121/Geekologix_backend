import express from "express";
import cors from "cors"
import { config } from "dotenv"
import taskRoute from "./routes/taskRoute.js"
import { errorMiddeleware } from "./Middlewares/error.js";


config({
    path: "./config/config.env"
})

export const App = express();

App.use(cors());
App.use(express.json());

App.get("/", (req, res, next) => {
    res.status(200).send(`<h1>Backend Wokring </br><a href='http://localhost:${process.env.FRONTEND}' > click here </a> to check frontend </h1>`)
})

App.use("/api/v1", taskRoute);



App.use(errorMiddeleware)