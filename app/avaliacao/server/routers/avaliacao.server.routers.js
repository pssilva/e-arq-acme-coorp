/**
 * 
 * 
 * 
 * 
 * */
module.exports = function(app) {
    
    console.log("ID:9 :: avaliacao.server.routers.js ");
    var avaliacoes = require('../controllers/avaliacao.server.controller');
    
    app.get('/avaliacao/add',  function(req, res){
        avaliacoes.add(req, res);
    })
    .post('/avaliacao/add',  function(req, res){
        avaliacoes.add(req, res);
    });

    app.get('/avaliacao',  function(req, res){ 
        avaliacoes.index(req, res); 
    });

    app.get('/avaliacao/view/:id',  function(req, res){ 
        avaliacoes.view(req, res); 
    }); 

    app.get('/avaliacao/edit/:id',  function(req, res){
        avaliacoes.edit(req, res);
    })
    .post('/avaliacao/edit/:id',  function(req, res){ 
        avaliacoes.edit(req, res); 
    }); 

    app.get('/avaliacao/delete/:id',  function(req, res, id){ 
        avaliacoes.delete(req, res, id); 
    }); 

    app.get('/avaliacao/api/v1/livros',  function(req, res, id){ 
        avaliacoes.livros(req, res, id); 
    }); 
    
    //app.param('id', avaliacoes.avaliacaoId);

};