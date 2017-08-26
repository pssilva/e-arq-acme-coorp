/**
 * 
 * 
 * 
 * 
 * */
module.exports = function(app) {
    
    console.log("ID:9 :: evento_prestacao.server.routers.js ");
    var avaliacoes = require('../controllers/evento_prestacao.restful.server.controller');
    
    app.get('/evento_prestacao/add',  function(req, res){
        avaliacoes.add(req, res);
    })
    .post('/evento_prestacao/add',  function(req, res){
        avaliacoes.add(req, res);
    });

    app.get('/evento_prestacao',  function(req, res){ 
        avaliacoes.index(req, res); 
    });

    app.get('/evento_prestacao/view/:id',  function(req, res){ 
        avaliacoes.view(req, res); 
    }); 

    app.get('/evento_prestacao/edit/:id',  function(req, res){
        avaliacoes.edit(req, res);
    })
    .post('/evento_prestacao/edit/:id',  function(req, res){ 
        avaliacoes.edit(req, res); 
    }); 

    app.get('/evento_prestacao/delete/:id',  function(req, res, id){ 
        avaliacoes.delete(req, res, id); 
    }); 

    app.get('/evento_prestacao/api/v1/livros',  function(req, res, id){ 
        avaliacoes.livros(req, res, id); 
    }); 
    
    //app.param('id', avaliacoes.evento_prestacaoId);
    
};
