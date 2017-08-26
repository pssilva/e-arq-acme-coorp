/**
 * 
 * 
 * 
 * 
 * */
module.exports = function(app) {
    
    console.log("ID:9 :: classe_temporalidades.server.routers.js ");
    var classe_temporalidades = require('../controllers/classe_temporalidade.server.controller');
  
    app.get('/classe_temporalidades/api/v2',  function(req, res){ 
        classe_temporalidades.index(req, res); 
    }); 
      
    app.get('/classe_temporalidade/api/v2/add',  function(req, res){ 
        classe_temporalidades.add(req, res); 
    }) 
    .post('/classe_temporalidade/api/v2/add',  function(req, res){ 
        classe_temporalidades.add(req, res); 
    });

    app.get('/classe_temporalidade/api/v2/view/:id',  function(req, res){ 
        classe_temporalidades.view(req, res); 
    }); 

    app.get('/classe_temporalidade/api/v2/edit/:id',  function(req, res){
        classe_temporalidades.edit(req, res);
    })
    .post('/classe_temporalidade/api/v2/edit/:id',  function(req, res){ 
        classe_temporalidades.edit(req, res); 
    }); 

    app.get('/classe_temporalidade/api/v2/delete/:id',  function(req, res, id){ 
        classe_temporalidades.delete(req, res, id); 
    }); 

    app.get('/classe_temporalidade/api/v2/api/livros',  function(req, res, id){ 
        classe_temporalidades.livros(req, res, id); 
    }); 
    
    //app.param('id', classe_temporalidades.classe_temporalidadeId);

};