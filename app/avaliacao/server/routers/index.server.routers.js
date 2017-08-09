/**
 * 
 * 
 * 
 * 
 * */
module.exports = function(app) {
    
    console.log("ID:8 :: index.server.routers.js ");
    
    var index = require('../controllers/index.server.controller');
        suporte_mongose = require('../controllers/suporte_mongose.server.controller');

    app.get('/', index.render);
    

    app.get('/suporte/mongosse/',  function(req, res){

        suporte_mongose.loadDB(req, res);

        // res.render('index', 
        //     { 
        //         title: 'AdminLTE >> :: <<',
        //         pathTheme: '/AdminLTE'
        //     });
        
    });

    // app.get('/', function(req, res){
    //     res.render('/', 
    //         { 
    //             title: 'AdminLTE >> :: <<',
    //             pathTheme: '/AdminLTE'
    //         }) 
    // });

    app.get('/admin-lte.ejs', function(req, res){
        res.render('admin-lte', 
            { 
                title: 'AdminLTE',
                pathTheme: '/AdminLTE'
            }) 
    });
    
    app.get('/gentelella.ejs', function(req, res){
        res.render('gentelella', 
            { 
                title: 'Gentelella',
                pathTheme: '/gentelella'
            }) 
    });
    
};

   