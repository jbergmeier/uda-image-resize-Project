import express from "express";
import * as dotenv from "dotenv";
import logger from './utilities/logger';

dotenv.config();

const app = express();
const port = 3000 || process.env.PORT;


app.get("/", logger, (req, res) => {
    console.log("hllo");
    res.send("hello from APU")
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})



const myFunc = (num: number): number => {
    return num * num;
  };
  
  export default myFunc;