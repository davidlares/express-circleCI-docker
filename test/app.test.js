const request = require('supertest'); // requerimos supertest
const app = require('../app'); // referencia al archivo a probar

// mocha
describe('app', function(){
  // TDD
  it('serving html file', function(done){
    request(app).get('/').expect('Content-Type', /html/).expect(200,done);
  });
});
