/**
 * 
 * 
 * 
 * 
 * */
module.exports = function(app) {
    
    var index = require('../controllers/index.server.controller');
        suporte_mongose = require('../controllers/suporte_mongose.server.controller');

    app.get('/', index.render);
    app.get('/suporte/mongosse/',  function(req, res){
        suporte_mongose.loadDB(req, res);
    });
    app.get('/suporte/mongosse/aluguel',  function(req, res){
        suporte_mongose.loadAluguel(req, res);
    });
    app.get('/suporte/mongosse/avaliacao',  function(req, res){
        suporte_mongose.loadAvaliacao(req, res);
    });
    
};

   