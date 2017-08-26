/**
 * 
 * 
 * 
 * 
 * */
module.exports = function(app) {
    
    console.log("ID:9 :: documentos.server.routers.js ");
    var documentos = require('../controllers/documento.restful.server.controller');
  
    app.get('/documentos/api/v2',  function(req, res){ 
        documentos.index(req, res); 
    }); 
      
    app.get('/documento/api/v2/add',  function(req, res){ 
        documentos.add(req, res); 
    }) 
    .post('/documento/api/v2/add',  function(req, res){ 
        documentos.add(req, res); 
    });

    app.get('/documento/api/v2/view/:id',  function(req, res){ 
        documentos.view(req, res); 
    }); 

    app.get('/documento/api/v2/edit/:id',  function(req, res){
        documentos.edit(req, res);
    })
    .post('/documento/api/v2/edit/:id',  function(req, res){ 
        documentos.edit(req, res); 
    }); 

    app.get('/documento/api/v2/delete/:id',  function(req, res, id){ 
        documentos.delete(req, res, id); 
    }); 

    app.get('/documento/api/v2/api/livros',  function(req, res, id){ 
        documentos.livros(req, res, id); 
    }); 
    
    //app.param('id', documentos.documentoId);

};