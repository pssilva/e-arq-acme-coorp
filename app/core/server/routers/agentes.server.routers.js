/**
 * 
 * 
 * 
 * 
 * */
var url = require('url');

module.exports = function(app) {
    
    console.log("ID:9 :: agentes.server.routers.js ");
    var agentes = require('../controllers/agente.restful.server.controller');
  
    app.get('/agentes/api/v2',  function(req, res){ 
        agentes.index(req, res); 
    }); 
      
    app.post('/agente/api/v2/add',  function(req, res){ 
        agentes.add(req, res); 
    });

    app.get('/agente/api/v2/view/:id',  function(req, res){ 
        agentes.view(req, res); 
    }); 

    app.get('/agente/api/v2/edit/:id',  function(req, res){
        agentes.edit(req, res);
    })
    .post('/agente/api/v2/edit/:id',  function(req, res){ 
        agentes.edit(req, res); 
    }); 

    app.get('/agente/api/v2/delete/:id',  function(req, res, id){ 
        agentes.delete(req, res, id); 
    }); 

    app.get('/agente/api/v2/livros',  function(req, res, id){ 
        agentes.livros(req, res, id); 
    }); 

    app.get('/agente/api/v2/schema-contract',  function(req, res, id){ 
        agentes.contract(req, res, id); 
    }); 
    
    //app.param('id', agentes.agenteId);

};