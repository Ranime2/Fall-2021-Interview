
const request = require('supertest');
const app = require('../modules/app');
var validShortly;
beforeAll(done => {
  done()
})

afterAll(done => {
  done()
})
describe ('test encoding endpoint', ()=>{
  it('test valid encode request', async(done) => {
    const res = await request(app)
      .get('/encode')
      .send({
        url: 'https://www.google.com/',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('response');
    validShortly = res.body.response.encoding.short_encoding;
    done();
  });
  it('test invalid encode request', async(done) => {
    const res = await request(app)
      .get('/encode')
      .send({
        url: 'google.com/',
      });
    expect(res.statusCode).toEqual(500);
    expect(res.body.response).toHaveProperty('error');
    done();
  });
  
})

describe ('test decoding endpoint', ()=>{
  it('test valid decode request', async(done) => {
    const res = await request(app)
      .get('/decode')
      .send({
        url: validShortly,
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('response');
    done();
  });
  it('test invalid encode request', async(done) => {
    const res = await request(app)
      .get('/decode')
      .send({
        url: 'google.com/',
      });
    expect(res.statusCode).toEqual(500);
    expect(res.body.response).toHaveProperty('error');
    done();
  });
  
})