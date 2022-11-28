const assert = require('assert');
const app = require('../app');
const request = require('supertest');

describe('GET /', function () {
  it('should respond with JSON object containing message home page', async function () {
    const res = await request(app).get("/").expect(200);
    assert.ok(res.body.message.length > 0);
  });
});