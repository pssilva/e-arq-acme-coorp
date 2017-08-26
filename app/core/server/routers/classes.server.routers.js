/**
 * 
 * 
 * 
 * 
 * */
module.exports = function(app) {
    
    console.log("ID:9 :: classes.server.routers.js ");
    var classes = require('../controllers/classe.server.controller');
  
    app.get('/classes/api/v2',  function(req, res){ 
        classes.index(req, res); 
    }); 
      
    app.get('/classe/api/v2/add',  function(req, res){ 
        classes.add(req, res); 
    }) 
    .post('/classe/api/v2/add',  function(req, res){ 
        classes.add(req, res); 
    });

    app.get('/classe/api/v2/view/:id',  function(req, res){ 
        classes.view(req, res); 
    }); 

    app.get('/classe/api/v2/edit/:id',  function(req, res){
        classes.edit(req, res);
    })
    .post('/classe/api/v2/edit/:id',  function(req, res){ 
        classes.edit(req, res); 
    }); 

    app.get('/classe/api/v2/delete/:id',  function(req, res, id){ 
        classes.delete(req, res, id); 
    }); 

    app.get('/classe/api/v2/api/livros',  function(req, res, id){ 
        classes.livros(req, res, id); 
    }); 
    
    //app.param('id', classes.classeId);

};