/**
 * 
 * 
 * 
 * 
 * */
module.exports = function(app) {
    
    console.log("ID:8 :: index.server.routers.js ");
    
    var index = require('../controllers/index.server.controller');
        avaliacao = require('../controllers/avaliacao.server.controller');

    app.get('/', index.render);
    
    app.get('/avaliacao/add/',  function(req, res){
        avaliacao.add(req, res);
    });


    app.get('/avaliacao/edit/:id',  function(req, res, id){
        avaliacao.edit(req, res, id);
    });

    
};