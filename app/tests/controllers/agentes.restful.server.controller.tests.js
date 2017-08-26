/**
  * 
  *
  * Execute o comando: 
  *       mocha --reporter spec app/tests/controllers/agentes.restful.server.controller.tests.js
  */
var app = require('../../core/server/config/server_api_restful.js'),
    request = require('supertest'),
    should = require('should'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Agente = mongoose.model('Agente'),
    randomNumberAgente = Math.floor(Math.random() * 900);
   
var user, agente, pessoaJSON, agenteJSON;

describe('Agentes Controller Unit Tests:', function() { 
  beforeEach(function(done) {
    var randomNumberUser = Math.floor(Math.random() * 99);
    
    User.findOne(
      {"email": "firstName.lastName-"+randomNumberUser+"@localhost.co"}, 
      function (err, user) { 
        if (!err) { 
          pessoaJSON = { 
            "code": "CDP - " + randomNumberAgente, 
            "endereco": "Rua zero, n. " + randomNumberAgente + ", Brasil." , 
            "type": "PF", 
            "createdBy": user._id 
          }; 

          agenteJSON = { 
            'nome': 'Testando o ADD - ' + randomNumberAgente, 
            'identificador': 'identificador - ' + randomNumberAgente, 
            'autorizacao_acesso': 'autorizacao_acesso - ' + randomNumberAgente, 
            'credenciais_autorizacao': 'Public', 
            'relacao': 'relacao - ' + randomNumberAgente, 
            'status': 'status - ' + randomNumberAgente, 
            "createdBy": user._id 
          }; 
        } 
        done(); 
    });
  }); 

  describe('Testando Cadastro usando POST methods', function() { 
    it('Cadastro de Agentes', function(done){ 
      
        request(app).post('/agente/api/v2/add') 
          .send({
            "pessoa": pessoaJSON,
            "agente": agenteJSON
          })
          .set('Accept', 'application/json') 
          .expect('content-type', /json/) 
          .expect(200) 
          .end(function(err, res) {
            agente = res.body.result;
            done(); 
          }); 
    }); 
    
  }); 

  afterEach(function(done) { 
    done(); 
  }); 

}); 

