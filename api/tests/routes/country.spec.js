/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
  id:'ARG'
};
const activity={
  
  name:"TREIK",
  difficulty:"1",
  duration:"120",
  season:"verano",
  countriesId:["KGZ","SHN","SGP"]

}

xdescribe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });
});

xdescribe('Activity routes',()=>{
  before(()=>conn.authenticate()
  .catch((err)=>{
    console.error('Unable to connect to the database:', err)
  }))
  describe('POST /activity',()=>{
    it('responds with 200',()=> agent.post('/activity').send(activity).expect(200))
    
  })
  describe('GET /activities',()=>{
    it('responds with 200',()=> agent.get('/activities').expect(200))
  })
})
