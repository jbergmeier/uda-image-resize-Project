import express from "express";
const routes = express.Router();
import logger from '../utilities/logger';
import testSub from './api/testSubApi';

routes.get("/", logger, (req:express.Request, res:express.Response) => {
    console.log("hllo");
    res.send("MAIN")
})

routes.use("/testSub", testSub);

export default routes;