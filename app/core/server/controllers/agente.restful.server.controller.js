
/**
  * 
  * 
  */

var mongoose = require('mongoose'),
    Pessoa = require('mongoose').model('Pessoa'),
    PessoaFisica = require('mongoose').model('PessoaFisica'),
    User = require('mongoose').model('User'),
    Agente = require('mongoose').model('Agente');

exports.render = function(req, res) {
    
  console.log("ID:13 :: agente.restful.server.controller.js ");
  if (!req.isAuthenticated()) return res.redirect('/modelo/signin');
    
    res.status(res.statusCode)
       .render('modelo',{ 
           pathTheme: 'AdminLTE', 
           title: ':: Site modelo :: Controller', 
           user: JSON.stringify(req.user) 
       });
};

/**
  * 
  * 
  */
exports.index = function(req, res) { 
  console.log("ID:28 :: agente.restful.server.controller :: index()"); 
  //if (!req.isAuthenticated()) return res.redirect('/modelo/signin'); 
    Agente.find({}, function (err, agentes) { 

        res.setHeader('content-type', 'application/json'); 
        if(err) return res.end(JSON.stringify({"result":err, "err":true})); 
        else res.end(JSON.stringify({"result":agentes, "err":false})); 

    }); 
}; 

/** 
  * 
  * 
  */ 
exports.add = function(req, res) { 
  console.log("ID:45 :: agente.restful.server.controller :: add() "); 
  //if (!req.isAuthenticated()) return res.redirect('/modelo/signin'); 

    res.setHeader('content-type', 'application/json'); 
    
    var agente = new Agente(req.body.agente); 
    agente.save(function(err) { 
       if(err) return res.end(JSON.stringify({"result":err, "err":true})); 
        else res.end(JSON.stringify({"result":agente, "err":false})); 
    }); 

}; 

/**
  * 
  * 
  */
exports.edit = function(req, res, id) {
  console.log("ID:66 :: agente.restful.server.controller :: edit() ");
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
  console.log("ID:84 :: agente.restful.server.controller :: delete() "); 
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
  console.log("ID:101 :: agente.restful.server.controller :: contract() "); 
  //if (!req.isAuthenticated()) return res.redirect('/modelo/signin'); 

    res.setHeader('content-type', 'application/json'); 
    res.end(JSON.stringify(
        { 
          "result":{"msn":"Trabalho em progresso: funcionalidade não implementada."}, 
          "err":false, 
          "status": res.statusCode 
        })); 

}; 





