import supertest from 'supertest';
import app from '../main';
import path from 'path';
import clearThumbDir from '../utilities/clearThumbCache';

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
