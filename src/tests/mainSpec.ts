import supertest from 'supertest';
import app from '../main';
import clearThumbDir from '../utilities/clearThumbCache';
import path from "path"
import resizeImage from "../utilities/fileReader"

//const backupDir = path.join(__dirname, '..', '..','images/backup/')
const thumbDir = path.join(__dirname, '..', '..', 'images/thumb/');

// ------Tests
describe('Test endpoint responses', () => {
  beforeAll(() => {
    clearThumbDir(thumbDir);
  }),
    it('gets the api endpoint that does not exists', async done => {
      supertest(app)
        .get('/api/images/?filename=BlablaIMage&width=200&height=200')
        .expect(404, done);
    }),
    it('calls the ApI of a non existing sized image', async done => {
      supertest(app)
        .get('/api/images/?filename=fjord&width=1&height=541')
        .expect(201, done);
    });
});


const width = 255
const height = 255
const filename = "fjord"
const fullDir = path.join(__dirname, '..', '..', '/images/full/')


describe('Image Processing test', () => {
    const filename = 'fjord';
    const height = 223;
    const width = 223;
  
    it('checks if file can be processed', async () => {
        console.log("the path to file: " + fullDir)

      const imgFile = await resizeImage(fullDir, filename, width, height);
      expect(imgFile).toEqual(thumbDir + 'fjord-223-223.jpg');
    });
  });