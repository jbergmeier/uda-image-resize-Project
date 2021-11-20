import express from "express";
const routes = express.Router();
import logger from '../utilities/logger';
import images from './api/images';

routes.get("/", logger, (req:express.Request, res:express.Response) => {
    console.log("hllo");
    res.send("MAIN")
})

routes.use("/images", images);

export default routes;