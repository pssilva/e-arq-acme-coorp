/**
  * 
  * Rode o comando: NODE_ENV=test mocha --reporter spec app/tests/models 
  * 
  */

var app = require('../../core/server/config/server_api_restful.js'),
       should = require('should'),
       mongoose = require('mongoose'),
       User = mongoose.model('User'),
       {{Modelo}} = mongoose.model('{{Modelo}}');

var user, {{modelo}};

describe('{{Modelo}} Model Unit Tests:', function() { 
  
  beforeEach(function(done) { 

    console.log(" ID:17 :: {{modelo}}s.server.model.tests :: beforeEach() "); 
    done(); 

  }); 

  describe('Testing the save method', function() { 
    it('Should be able to save without problems', function() { 

      console.log(" ID:41 :: {{modelo}}s.server.model.tests :: it() "); 
      
    }); 

    it('Should not be able to save an {{modelo}} without a title', function() { 

        console.log(" ID:51 :: {{modelo}}s.server.model.tests :: it() "); 

      }); 
  }); 

  afterEach(function(done) { 

      console.log(" ID:61 :: {{modelo}}s.server.model.tests :: afterEach() "); 
      done(); 
  }); 
}); 






