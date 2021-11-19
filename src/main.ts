import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000 || process.env.PORT;

// Import Routes
import routes from './routes/index';
app.use('/api', routes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

// Test Function - can be deleted later ( is checked in jasmin)
const myFunc = (num: number): number => {
    return num * num;
  };
  
  export default myFunc;