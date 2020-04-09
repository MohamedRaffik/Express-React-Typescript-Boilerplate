import app from '../app';
import supertest from 'supertest';

describe('Testing Express App', () => {
  it('should start the express app and return the html page', async () => {
    const server = app.listen();
    const fetch = supertest.agent(server);
    const response = await fetch.get('/');
    expect(response.type).toEqual('text/html');
    expect(response.status).toEqual(200);
    await new Promise((resolve) => server.close(resolve));
  });
});
