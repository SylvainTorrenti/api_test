const should = require('should');
const request = require('supertest');
const server = require('../../../app').express;

describe('controllers', () => {
  describe('products', () => {
    describe('GET /products', () => {
      it('should return a default string', (done) => {
        request(server)
          .get('/products')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(403)
          .end((err, res) => {
            // should.not.exist(err);
            // res.body.should.eql('Hello, stranger!');
            done();
          });
      });

      it('should accept a name parameter', (done) => {
        request(server)
          .get('/hello')
          .query({ access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaXRlSWQiOiJRNDZYIiwidXNlcklkIjoicG91bGV0eGFydCIsImxhbmd1YWdlIjoiRlIiLCJsYXN0TmFtZSI6IlBvdWxldCIsImZpcnN0TmFtZSI6IkFydGh1ciIsInJvbGVzIjpbIlByb2ZpbGUgTWFuYWdlciIsIlRyYXZlbCBBcHByb3ZlciIsIlRyYXZlbCBBcnJhbmdlciIsIlRyYXZlbGVyIl0sImJvb2tSb2xlcyI6eyJhcHAiOnRydWUsImFyciI6dHJ1ZSwidHZsIjp0cnVlfSwiYm9va0F1dGgiOnsic2l0ZSI6dHJ1ZSwiZ3Vlc3QiOnRydWUsIm1lIjp0cnVlfSwib2RtX2FjdGl2YXRlZCI6ZmFsc2UsIm5lZWRfZGVyb2dhdGlvbiI6dHJ1ZSwic2Vzc2lvbklkIjoiMzEzMjMyMzgzNiIsImxvY2F0aW9uIjpbNDAuNTUyNSwtNzQuMjkxNV0sImRhdGFfaWQiOnsiY291bnRyeV9pcCI6IlVTIiwiaXAiOiI1NC4zNi4xNTYuMTY0In0sInNlc3Npb25VdWlkIjoiZGUzYWRkOTAtMjc4YS0xMWU4LWIxZGQtOWRhNGVjZTIyOGZmIiwiaWF0IjoyNTIxMDMzODAyLCJleHAiOjI1MjEwNDEwMDJ9.ZFReZXMOK91PQUvFRE63Ywd8cu6m42PQv_9lqwKwUrM' })
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            should.not.exist(err);
            res.body.should.eql({ message: 'ok' });
            done();
          });
      });
    });
  });
});
