/**
 * 
 * 
 * 
 * 
 * */
module.exports = function(app) {
    
    console.log("ID:9 :: index.server.routers.js ");
    
    var index = require('../controllers/index.server.controller');
        suporte_mongose = require('../controllers/suporte_mongose.server.controller');

    app.get('/', index.render);
    
    app.get('/suporte/mongosse/',  function(req, res){
        suporte_mongose.loadDB(req, res);
    });

};