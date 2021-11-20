import express from "express";
import * as dotenv from "dotenv";
import * as ejs from "ejs";
import path from "path"
import clearThumbDir from "./utilities/clearThumbCache"
//import resizeImage from "./utilities/fileReader"
import fs from "fs";

dotenv.config();

const app = express();
const port = 3000 || process.env.PORT;

app.engine('html', ejs.renderFile);

// Import Routes
import routes from './routes/index';
app.use('/api', routes)

// Test Path
app.get('/', function(req, res) {
  res.render(path.join(__dirname, '..', 'public/index.html') , {name:"Hello Image Resize Friends"});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

export default app