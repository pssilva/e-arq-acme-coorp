
/**
  * 
  * 
  */

var mongoose = require('mongoose'),
    Pessoa = require('mongoose').model('Pessoa'),
    PessoaFisica = require('mongoose').model('PessoaFisica'),
    User = require('mongoose').model('User'),
    {{Modelo}} = require('mongoose').model('{{Modelo}}');

exports.render = function(req, res) {
  console.log("ID:13 :: {{modelo}}.restful.server.controller.js ");
  //if (!req.isAuthenticated()) return res.redirect('/modelo/signin'); 

    res.setHeader('content-type', 'application/json'); 
    res.end(JSON.stringify(
        {
          "result":{"msn":"Trabalho em progresso: funcionalidade não implementada."}, 
          "err":false,
          "status": res.statusCode
        })); 
};

/**
  * 
  * 
  */
exports.index = function(req, res) { 
  console.log("ID:28 :: {{modelo}}.restful.server.controller :: index()"); 
  //if (!req.isAuthenticated()) return res.redirect('/modelo/signin'); 

    res.setHeader('content-type', 'application/json'); 
    res.end(JSON.stringify(
        {
          "result":{"msn":"Trabalho em progresso: funcionalidade não implementada."}, 
          "err":false,
          "status": res.statusCode
        })); 
}; 

/** 
  * 
  * 
  */ 
exports.add = function(req, res) { 
  console.log("ID:45 :: {{modelo}}.restful.server.controller :: add() "); 
  //if (!req.isAuthenticated()) return res.redirect('/modelo/signin'); 

    res.setHeader('content-type', 'application/json'); 
    res.end(JSON.stringify(
        {
          "result":{"msn":"Trabalho em progresso: funcionalidade não implementada."}, 
          "err":false,
          "status": res.statusCode
        })); 

}; 

/**
  * 
  * 
  */
exports.edit = function(req, res, id) {
  console.log("ID:66 :: {{modelo}}.restful.server.controller :: edit() ");
  //if (!req.isAuthenticated()) return res.redirect('/modelo/signin'); 

    res.setHeader('content-type', 'application/json'); 
    res.end(JSON.stringify(
        {
          "result":{"msn":"Trabalho em progresso: funcionalidade não implementada."}, 
          "err":false,
          "status": res.statusCode
        }));  

}; 

/**
  * 
  * 
  */
exports.delete = function(req, res, id) { 
  console.log("ID:84 :: {{modelo}}.restful.server.controller :: delete() "); 
  //if (!req.isAuthenticated()) return res.redirect('/modelo/signin'); 

    res.setHeader('content-type', 'application/json'); 
    res.end(JSON.stringify(
        {
          "result":{"msn":"Trabalho em progresso: funcionalidade não implementada."}, 
          "err":false,
          "status": res.statusCode
        })); 

}; 

/**
  * 
  * 
  */
exports.contract = function(req, res) { 
  console.log("ID:101 :: {{modelo}}.restful.server.controller :: contract() "); 
  //if (!req.isAuthenticated()) return res.redirect('/modelo/signin'); 

    res.setHeader('content-type', 'application/json'); 
    res.end(JSON.stringify(
        { 
          "result":{"msn":"Trabalho em progresso: funcionalidade não implementada."}, 
          "err":false, 
          "status": res.statusCode 
        })); 

}; 





