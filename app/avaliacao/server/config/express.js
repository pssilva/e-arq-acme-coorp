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
    favicon = require('serve-favicon');

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
    
    app.set('views', './app/avaliacao/server/views');
    app.set('view engine', 'ejs');

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(favicon(path.join('favicon.ico')))

    app.use(flash());
    require('../routers/users.server.routers')(app);
    require('../routers/index.server.routers')(app);
    require('../routers/avaliacao.server.routers')(app);
    /**#autoInsertRequire#*/


    app.use('/public',express.static('./app/core/client'));
    app.use('/AdminLTE',express.static("./app/core/client/themes/AdminLTE"));
    app.use('/layoutPages',express.static('./app/core/server/views/pages'));
    app.use('/lib',express.static('./app/core/client/lib'));
    /**#autoInsertStaticPath#*/

    return app;
};

