/**
 * 
 * 
 * 
 * 
 * */
module.exports = function(app) {
    
    console.log("ID:9 :: users.server.routers.js ");
    var users = require('../controllers/user.restful.server.controller');
  
    app.get('/users/api/v2',  function(req, res){ 
        users.index(req, res); 
    }); 
      
    app.get('/user/api/v2/add',  function(req, res){ 
        users.add(req, res); 
    }) 
    .post('/user/api/v2/add',  function(req, res){ 
        users.add(req, res); 
    });

    app.get('/user/api/v2/view/:id',  function(req, res){ 
        users.view(req, res); 
    }); 

    app.get('/user/api/v2/edit/:id',  function(req, res){
        users.edit(req, res);
    })
    .post('/user/api/v2/edit/:id',  function(req, res){ 
        users.edit(req, res); 
    }); 

    app.get('/user/api/v2/delete/:id',  function(req, res, id){ 
        users.delete(req, res, id); 
    }); 

    app.get('/user/api/v2/api/livros',  function(req, res, id){ 
        users.livros(req, res, id); 
    }); 
    
    //app.param('id', users.userId);

};