/**
  * 
  * 
  */
var app = require('../../core/server/config/server_api_restful.js'),
       request = require('supertest'),
       should = require('should'),
       mongoose = require('mongoose'),

       index = require('../controllers/index.server.controller');
       User = mongoose.model('User'),
       Documento = mongoose.model('Documento');
   
var user, documento;

describe('Documentos Controller Unit Tests:', function() { 
  beforeEach(function(done) { 
    
    console.log(" ID:18 :: documentos.server.controller.tests :: beforeEach() "); 
    done(); 

    // user = new User({
    //    firstName: 'Full',
    //    lastName: 'Name',
    //    displayName: 'Full Name',
    //    email: 'test@test.com',
    //    username: 'username',
    //    password: 'password'
    // });
    
    // user.save(function() {
    //   documento = new Documento({
    //     title: 'Documento Title',
    //      content: 'Documento Content',
    //      user: user
    //   });
    
    //   documento.save(function(err) {
    //     done();
    //   }); 
    //});

  }); 

  describe('Testing the GET methods', function() { 
    it('ID:47 :: documentos.server.controller.tests :: it()', function(done){ 
      
      // console.log(" ID:47 :: documentos.server.controller.tests :: it() "); 
      done(); 

      // request(app).get('/api/documentos/') 
      //      .set('Accept', 'application/json') 
      //      .expect('Content-Type', /json/) 
      //      .expect(200) 
      //      .end(function(err, res) { 
      //        res.body.should.be.an.Array.and.have.lengthOf(1); 
      //        res.body[0].should.have.property('title', documento.title); 
      //        res.body[0].should.have.property('content', documento.content); 
      //        done(); 
      //   }); 
    }); 
    
    it('ID:65 :: documentos.server.controller.tests :: it() ', function(done) { 


      //console.log(" ID:65 :: documentos.server.controller.tests :: it() "); 
      done(); 

        // request(app).get('/api/documentos/' + documento.id) 
        //  .set('Accept', 'application/json') 
        //  .expect('Content-Type', /json/) 
        //  .expect(200) 
        //  .end(function(err, res) { 
        //    res.body.should.be.an.Object.and.have.property('title',documento.title); 
        //    res.body.should.have.property('content', documento.content); 
        //       done(); 
        // }); 

    }); 
  }); 

  afterEach(function(done) { 

    console.log(" ID:82 :: documentos.server.controller.tests :: afterEach() "); 
    done(); 
    // Documento.remove().exec(); 
    // User.remove().exec(); 
    //done(); 

  }); 

}); 



