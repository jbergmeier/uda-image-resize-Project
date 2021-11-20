import fs from "fs";
import path from "path";

const clearThumbDir = (thumbDir:string): void => {

fs.readdir(thumbDir, (err, files) => {
  if (err) throw err;
  for (const file of files) {
    fs.unlink(path.join(thumbDir, file), err => {
      if (err) throw err;
    });
  }
});
}

export default clearThumbDir;