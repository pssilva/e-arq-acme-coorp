/**
  * 
  * Execute o comando: $NODE_ENV=test mocha --reporter spec app/tests/controllers
  * 
  */
var app = require('../../core/server/config/server_api_restful.js'),
       request = require('supertest'),
       should = require('should'),
       mongoose = require('mongoose'),
       User = mongoose.model('User'),
       {{Modelo}} = mongoose.model('{{Modelo}}');
   
var user, {{modelo}};

describe('{{Modelo}}s Controller Unit Tests:', function() {
  beforeEach(function(done) {
    
    console.log(" ID:18 :: {{modelo}}s.server.controller.tests :: beforeEach() "); 
    done();

  });

  describe('Testing the GET methods', function() { 
    it('Should be able to get the list of {{modelo}}s', function(done){ 
      
      console.log(" ID:47 :: {{modelo}}s.server.controller.tests :: it() "); 
      done(); 
    }); 
    
    it('Should be able to get the specific {{modelo}}', function(done) { 


      console.log(" ID:65 :: {{modelo}}s.server.controller.tests :: it() "); 
      done(); 
    }); 
  }); 

  afterEach(function(done) { 

    console.log(" ID:82 :: {{modelo}}s.server.controller.tests :: afterEach() "); 
    done(); 

  }); 

}); 



