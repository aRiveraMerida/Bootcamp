const request = require('supertest');
const app = require('../server');

describe('Post Movie', () => {
  it('should create a new movie', async () => {
    const res = await request(app).post('/api/v1/movies').send({
      Title: 'The Batman',
      Poster:
        'https://posters.movieposterdb.com/22_06/2022/1877830/l_1877830_e7d9539b.jpg',
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.status).toEqual('Success');
  });
});
