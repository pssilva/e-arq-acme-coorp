/**
 * New node file
 */
var config = require('./config'),
    path = require('path'),
    fs = require('fs'),
    express = require('express'),
    session = require('express-session'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    flash = require('connect-flash'),
    passport = require('passport'),
    favicon = require('serve-favicon'),
    url = require('url');

module.exports = function(db) {
    var app = express();
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
         app.use(compress());
    }
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));
    
    // app.set('views', './app/admin/server/views');
    // app.set('view engine', 'ejs');

    app.use(passport.initialize());
    app.use(passport.session());
    
    app.use(favicon(path.join('favicon.ico')));
    //app.use(express.logger('dev'));
    app.use(flash());
    
    console.log("ID:46 :: core :: express.js");

    require('../routers/index.server.routers')(app);
    require('../routers/agentes.server.routers.js')(app);
    require('../routers/alugueis.server.routers.js')(app);
    require('../routers/avaliacoes.server.routers.js')(app);
    require('../routers/classe_temporalidades.server.routers.js')(app);
    require('../routers/classes.server.routers.js')(app);
    require('../routers/documentos.server.routers.js')(app);
    require('../routers/users.server.restful.routers.js')(app);
    require('../routers/users.server.routers.js')(app);
    /**#autoInsertRequire#*/

    app.use('/public',express.static('./app/core/client'));
    app.use('/AdminLTE',express.static('./app/core/client/themes/AdminLTE/'));
    app.use('/lib',express.static('./app/core/client/lib'));
    /**#autoInsertStaticPath#*/

    return app;
};

