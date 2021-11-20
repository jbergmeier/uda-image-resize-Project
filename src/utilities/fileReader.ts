//import {promises as fsPromises} from fs;
// Sharp test

import sharp from 'sharp';
import path from 'path';
import { stringify } from 'querystring';

// TODO remove any --> string/number
const resizeImage = async (
  input: string,
  filename: string,
  width: number,
  height: number
)  : Promise<string> => {
  const output = path.join(
    input,
    '..',
    'thumb/',
    filename + '-' + width + '-' + height + '.jpg'
  );
  console.log(output);
  console.log(input);
  try {
    const jpgResize = await sharp(path.join(input, filename + '.jpg'))
      .resize(width, height, {
        //fit: sharp.fit.inside,
        //withoutEnlargement: false
      })
      .jpeg()
      .toFile(output);
    return output;
  } catch (err) {
    console.log('error from sharp: ' + err);
    return Error.prototype.message
  }
};

// END sharp test --------
export default resizeImage;
