import express from "express";
import resizeImage from "../../utilities/fileReader";
const images = express.Router();
import path from "path";
import {checkIfFileExist, sizeOfExistingImage} from '../../utilities/existingFileChecker'
import fs from "fs";

images.get("/", (req:express.Request, res:express.Response) => {
    const inputPath = path.join(__dirname, '..', '..', '..', 'images/full/'); 
    const filename = String(req.query.filename) || '';
    const imageWidth = Number(req.query.width) || NaN;
    const imageHeight = Number(req.query.height) || NaN;
    const fsPathThumbsFile = path.join(__dirname, '..', '..', '..', 'images/thumb/' + filename +'-' + imageWidth + '-' + imageHeight + '.jpg')

    // check values
    if(isNaN(imageHeight)) {
        res.status(400).send("Image Height is not a valid value")
    }

    if(isNaN(imageWidth)) {
        res.status(400).send("Image Width is not a valid value")
    }

    if(fs.existsSync(inputPath + filename + '.jpg') == false){
        res.status(404).send("Image not available!")
    }

    // Check if Thumb-Image in the given size is already there, if not, create it.
    if (checkIfFileExist(fsPathThumbsFile) && sizeOfExistingImage(fsPathThumbsFile, imageWidth, imageHeight)) { 
            res.status(200).sendFile(fsPathThumbsFile);
            console.log("Image in der Groesse bereits vorhanden!")
        }
    else{
        // Call Resize Function with InputPath, filename, width and height
        (async () => {
            const ri = await resizeImage(inputPath, filename, imageWidth, imageHeight); 
            //res.render(path.join(__dirname, '..','..','..', 'public/index.html') , {name:"Nicht vorhanden"});
            res.status(201).sendFile(fsPathThumbsFile);
            console.log(ri)
        })()
    }

   

    // TODO value check??
    // TODO check if file exists --> Error messasge
    // TODO check if values for width and height are in a area...


    
    
    
})

export default images;