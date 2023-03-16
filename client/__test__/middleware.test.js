const request = require('supertest');
const app = require('express')();
const server = 'http://localhost:3000';

// Authorization middleware
// If I have time.. /api/user

// Weather middleware
describe('/test', () => {
  describe('GET', () => {
    it('responds with 200 status and application/json type', async () => {
      await request(server)
      .get('/test')
      .expect('Content-Type', /application\/json/)
      .expect(200)
    } )
  })
})