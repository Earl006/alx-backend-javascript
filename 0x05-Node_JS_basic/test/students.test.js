import { use, request, expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../full_server/server';

process.argv[2] = './database.csv';

use(chaiHttp);

describe('server!', () => {
  it('welcomes user to the api', () => new Promise((done) => {
    request(app)
      .get('/students/CS')
      .end((err, res) => {
        expect(res).to.have.property('status', 200);
        expect(res.text).to.equal(
          'List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie',
        );
        done();
      });
  }));
});
