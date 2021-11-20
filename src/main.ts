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

// Clear "Cache" Thumb Folder on Start
const thumbDir = path.join(__dirname, '..', 'images/thumb/')
clearThumbDir(thumbDir)

// Create on sample Resizing Image for Jasmin Testing - after clearing
const backupDir = path.join(__dirname, '..', 'images/backup/')
//resizeImage(fullDir, "fjord", 200, 200);
fs.copyFile(backupDir + 'fjord-200-200.jpg' , thumbDir + 'fjord-200-200.jpg', (err) => {
  if (err) throw err;
  console.log('sample File copied to Thumbfolder');
});

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