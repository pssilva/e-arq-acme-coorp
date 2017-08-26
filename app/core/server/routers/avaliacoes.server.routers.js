/**
 * 
 * 
 * 
 * 
 * */
module.exports = function(app) {
    
    console.log("ID:9 :: avaliacoes.server.routers.js ");
    var avaliacoes = require('../controllers/avaliacao.server.controller');
  
    app.get('/avaliacoes/api/v2',  function(req, res){ 
        avaliacoes.index(req, res); 
    }); 
      
    app.get('/avaliacao/api/v2/add',  function(req, res){ 
        avaliacoes.add(req, res); 
    }) 
    .post('/avaliacao/api/v2/add',  function(req, res){ 
        avaliacoes.add(req, res); 
    });

    app.get('/avaliacao/api/v2/view/:id',  function(req, res){ 
        avaliacoes.view(req, res); 
    }); 

    app.get('/avaliacao/api/v2/edit/:id',  function(req, res){
        avaliacoes.edit(req, res);
    })
    .post('/avaliacao/api/v2/edit/:id',  function(req, res){ 
        avaliacoes.edit(req, res); 
    }); 

    app.get('/avaliacao/api/v2/delete/:id',  function(req, res, id){ 
        avaliacoes.delete(req, res, id); 
    }); 

    app.get('/avaliacao/api/v2/api/livros',  function(req, res, id){ 
        avaliacoes.livros(req, res, id); 
    }); 
    
    //app.param('id', avaliacoes.avaliacaoId);

};