/**
 * 
 * 
 * 
 * 
 * */
module.exports = function(app) {
    
    console.log("ID:9 :: alugueis.server.routers.js ");
    var alugueis = require('../controllers/aluguel.restful.server.controller');
  
    app.get('/alugueis/api/v2',  function(req, res){ 
        alugueis.index(req, res); 
    }); 
      
    app.post('/aluguel/api/v2/add',  function(req, res){ 
        alugueis.add(req, res); 
    });

    app.get('/aluguel/api/v2/view/:id',  function(req, res){ 
        alugueis.view(req, res); 
    }); 

    app.get('/aluguel/api/v2/edit/:id',  function(req, res){
        alugueis.edit(req, res);
    })
    .post('/aluguel/api/v2/edit/:id',  function(req, res){ 
        alugueis.edit(req, res); 
    }); 

    app.get('/aluguel/api/v2/delete/:id',  function(req, res, id){ 
        alugueis.delete(req, res, id); 
    }); 

    app.get('/aluguel/api/v2/api/livros',  function(req, res, id){ 
        alugueis.livros(req, res, id); 
    }); 
    
    //app.param('id', alugueis.aluguelId);

};