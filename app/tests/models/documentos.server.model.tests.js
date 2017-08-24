/**
  * 
  * Rode o comando: NODE_ENV=test mocha --reporter spec app/tests/models 
  * 
  */

var app = require('../../core/server/config/server_api_restful.js'),
       should = require('should'),
       mongoose = require('mongoose'),
       User = mongoose.model('User'),
       Documento = mongoose.model('Documento');

var user, documento;

describe('Documento Model Unit Tests:', function() {
  
  beforeEach(function(done) {

    console.log(" ID:17 :: documentos.server.model.tests :: beforeEach() ");
    done(); 

    //  user = new User({
    //    firstName: 'Full',
    //    lastName: 'Name',
    //    displayName: 'Full Name',
    //    email: 'test@test.com',
    //    username: 'username',
    //    password: 'password'
    // });
    // user.save(function() {
    //     documento = new Documento({
    //        title: 'Documento Title',
    //        content: 'Documento Content',
    //        user: user
    //     });
    //     done(); 
    // });
  });

  describe('Testing the save method', function() {
    it('Should be able to save without problems', function() {

      console.log(" ID:41 :: documentos.server.model.tests :: it() ");
      // documento.save(function(err) { 
      //   should.not.exist(err); 
      // }); 
      
    }); 

    it('Should not be able to save an documento without a title', function() { 

        console.log(" ID:51 :: documentos.server.model.tests :: it() ");
        // documento.title = ''; 
        // documento.save(function(err) { 
        //   should.exist(err); 
        // }); 

      }); 
  }); 

  afterEach(function(done) { 

      console.log(" ID:61 :: documentos.server.model.tests :: afterEach() ");

      // Documento.remove(function() { 
      //   User.remove(function() { 
      //     done(); 
      //   }); 
      // }); 

      done(); 
  }); 
}); 






