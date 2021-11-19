import express from "express";
const testSub = express.Router();

testSub.get("/", (req:express.Request, res:express.Response) => {
    console.log("hlHello Test Sublo");
    res.send("Test Sub")
})

export default testSub;