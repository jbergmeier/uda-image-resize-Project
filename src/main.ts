import express from "express";
import * as dotenv from "dotenv";
import sharp from "sharp";
dotenv.config();

const app = express();
const port = 3000 || process.env.PORT;

// Import Routes
import routes from './routes/index';
app.use('/api', routes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

sharp('input.jpg')
  .rotate()
  .resize(200)
  .jpeg({ mozjpeg: true })
  .toBuffer()

// Test Function - can be deleted later ( is checked in jasmin)
const myFunc = (num: number): number => {
    return num * num;
  };
  
  export default myFunc;