/**
 * New node file
 */
var config = require('./config'),
	express = require('express'),
	session = require('express-session'),
	morgan = require('morgan'),
	compress = require('compression'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	flash = require('connect-flash');

module.exports = function() {
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
	
	app.set('views', './app/admin/server/views');
    app.set('view engine', 'ejs');

    app.use(flash());
	
    require('../routers/index.server.routers')(app);
	/**#autoInsertRequire#*/


    app.use('/public',express.static('./app/core/client'));
    app.use('/AdminLTE',express.static('./app/core/client/themes/AdminLTE'));
    app.use('/lib',express.static('./app/core/client/lib'));
	/**#autoInsertStaticPath#*/

	return app;
};

