
import supertest from 'supertest';
import app from '../main';
import fs from 'fs';
import path from 'path';

const backupDir = path.join(__dirname, '..', '..','images/backup/')
const thumbDir = path.join(__dirname, '..', '..', 'images/thumb/')

fs.copyFile(backupDir + 'fjord-200-200.jpg' , thumbDir + 'fjord-200-200.jpg', (err) => {
  if (err) throw err;
  console.log('sample File copied to Thumbfolder');
});

// ------Tests 
describe('Test endpoint responses', () => {
  beforeAll(() => {
    console.log("hello WORLD: " + backupDir)
   });
  it('gets the api endpoint that does not exists', async (done) => {
    supertest(app)
    .get("/api/images/?filename=BlablaIMage&width=200&height=200")
    .expect(404, done);
  }
),
it('gets a cached image from API', async (done) => {
  supertest(app)
  .get("/api/images/?filename=fjord&width=200&height=200")
  .expect(200, done);
}
),
it('calls the ApI of a non existing sized image', async (done) => {
  supertest(app)
  .get("/api/images/?filename=fjord&width=1&height=541")
  .expect(201, done);
}
)

});

