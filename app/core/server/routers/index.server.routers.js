/**
 * 
 * 
 * */
module.exports = function(app) {
    var index = require('../controllers/index.server.controller'); 
    app.get('/', index.render, function(req, res){
        res.render('index', 
            { 
                title: 'AdminLTE',
                pathTheme: 'AdminLTE'
            }) 
    });
};

