import fs from 'fs';
import sizeOf from 'image-size';

const checkIfFileExist = (fsPathThumbsFile: string): boolean => {
  const fileCheck: boolean = fs.existsSync(fsPathThumbsFile);
  return fileCheck;
};

const sizeOfExistingImage = (
  fsPathThumbsFile: string,
  imageWidth: number,
  height: number
): boolean => {
  const sizeOfImage = sizeOf(fsPathThumbsFile);

  // TODO delete log - Test Tracking
  console.log('File exists');
  console.log('existingFile width: ' + sizeOfImage.width);
  console.log('existingFile height: ' + sizeOfImage.height);

  return sizeOfImage.width == imageWidth && sizeOfImage.height == height;
};

export { checkIfFileExist, sizeOfExistingImage };
