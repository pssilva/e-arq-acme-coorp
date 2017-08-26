/**
 * 
 * 
 * 
 * 
 * */
module.exports = function(app) {
    
    console.log("ID:9 :: componente_digital.server.routers.js ");
    var componente_digital = require('../controllers/documento.server.controller');
  
    app.get('/componente_digital/api/v2',  function(req, res){ 
        componente_digital.index(req, res); 
    }); 
      
    app.get('/documento/api/v2/add',  function(req, res){ 
        componente_digital.add(req, res); 
    }) 
    .post('/documento/api/v2/add',  function(req, res){ 
        componente_digital.add(req, res); 
    });

    app.get('/documento/api/v2/view/:id',  function(req, res){ 
        componente_digital.view(req, res); 
    }); 

    app.get('/documento/api/v2/edit/:id',  function(req, res){
        componente_digital.edit(req, res);
    })
    .post('/documento/api/v2/edit/:id',  function(req, res){ 
        componente_digital.edit(req, res); 
    }); 

    app.get('/documento/api/v2/delete/:id',  function(req, res, id){ 
        componente_digital.delete(req, res, id); 
    }); 

    app.get('/documento/api/v2/api/livros',  function(req, res, id){ 
        componente_digital.livros(req, res, id); 
    }); 
    
    //app.param('id', componente_digital.documentoId);

};