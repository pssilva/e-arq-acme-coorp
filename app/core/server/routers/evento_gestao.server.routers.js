/**
 * 
 * 
 * 
 * 
 * */
module.exports = function(app) {
    
    console.log("ID:9 :: evento_gestao.server.routers.js ");
    var avaliacoes = require('../controllers/evento_gestao.restful.server.controller');
    
    app.post('/evento_gestao/add',  function(req, res){
        avaliacoes.add(req, res);
    });

    app.get('/evento_gestao',  function(req, res){ 
        avaliacoes.index(req, res); 
    });

    app.get('/evento_gestao/view/:id',  function(req, res){ 
        avaliacoes.view(req, res); 
    }); 

    app.get('/evento_gestao/edit/:id',  function(req, res){
        avaliacoes.edit(req, res);
    })
    .post('/evento_gestao/edit/:id',  function(req, res){ 
        avaliacoes.edit(req, res); 
    }); 

    app.get('/evento_gestao/delete/:id',  function(req, res, id){ 
        avaliacoes.delete(req, res, id); 
    }); 

    app.get('/evento_gestao/api/v1/livros',  function(req, res, id){ 
        avaliacoes.livros(req, res, id); 
    }); 
    
    //app.param('id', avaliacoes.evento_gestaoId);
    
};
