const request = require('supertest');

const server = require('./api/server.js');

describe('POST /users/:username', () => {
  it('should add the person', async () => {
    const username = 'sirATL';
    const expected = { Username: 'sirATL' };

    const response = await request(server).post(`/users/${username}`);

    expect(response.body).toEqual(expected);
  });
});

describe('DELETE /users/:username', () => {
  it('should delete the specified person', async () => {
    const username = 'sirATL';
    const expected = { deleted: `${username}` };

    const response = await request(server).delete(`/users/${username}`);

    expect(response.body).toEqual(expected);
  });
});
