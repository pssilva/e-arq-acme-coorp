/**
  * 
  * 
  */
var appRestful = require('../../core/server/config/server_api_restful.js'),
    appAdmin = require('../../admin/server/config/server.js'),
       request = require('supertest'),
       should = require('should'),
       mongoose = require('mongoose'),
       User = mongoose.model('User'),
       Documento = mongoose.model('Documento');
   
var user, documento;

describe('Index Controller Unit Tests:', function() { 
  beforeEach(function(done) { 
    
    console.log(" ID:18 :: index.server.controller.tests :: beforeEach() "); 
    done(); 

  }); 

  describe('Testing the GET methods', function() { 
    it('ID:48 :: index.server.controller.tests :: it()', function(done){ 
      
      // console.log(" ID:47 :: index.server.controller.tests :: it() "); 
      // done(); 

        request(appAdmin).get('/') 
           //.set('Accept', 'application/json') 
           //.expect('Content-Type', /json/) 
           .expect(200) 
           //.session.isAuthenticated = true
           .end(function(err, res) { 
             res.session.isAuthenticated = true; 
             // res.body.should.be.an.Array.and.have.lengthOf(1); 
             // res.body[0].should.have.property('title', documento.title); 
             // res.body[0].should.have.property('content', documento.content); 
             done(); 
        }); 
    }); 
    
    it('ID:65 :: index.server.controller.tests :: it() ', function(done) { 
      //console.log(" ID:65 :: index.server.controller.tests :: it() "); 
      done(); 

        // request(app).get('/api/index/' + documento.id) 
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

    console.log(" ID:82 :: index.server.controller.tests :: afterEach() "); 
    done(); 

    // Documento.remove().exec(); 
    // User.remove().exec(); 
    //done(); 

  }); 

}); 



