/**
 * 
 * 
 * 
 * 
 * */
module.exports = function(app) {
    
    console.log("ID:9 :: {{modelo}}.server.routers.js ");
    var avaliacoes = require('../controllers/{{modelo}}.server.controller');
    
    app.get('/{{modelo}}/add',  function(req, res){
        avaliacoes.add(req, res);
    })
    .post('/{{modelo}}/add',  function(req, res){
        avaliacoes.add(req, res);
    });

    app.get('/{{modelo}}',  function(req, res){ 
        avaliacoes.index(req, res); 
    });

    app.get('/{{modelo}}/view/:id',  function(req, res){ 
        avaliacoes.view(req, res); 
    }); 

    app.get('/{{modelo}}/edit/:id',  function(req, res){
        avaliacoes.edit(req, res);
    })
    .post('/{{modelo}}/edit/:id',  function(req, res){ 
        avaliacoes.edit(req, res); 
    }); 

    app.get('/{{modelo}}/delete/:id',  function(req, res, id){ 
        avaliacoes.delete(req, res, id); 
    }); 

    app.get('/{{modelo}}/api/v1/livros',  function(req, res, id){ 
        avaliacoes.livros(req, res, id); 
    }); 
    
    //app.param('id', avaliacoes.{{modelo}}Id);
    
};
