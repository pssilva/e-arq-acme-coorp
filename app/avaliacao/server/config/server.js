/**
 * New node file
 * Deve-se criar a variável de ambiente
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.SESSION_SECRET = process.env.SESSION_SECRET || 'developmentSessionSecret';

var mongoose = require('./mongoose'),
    express = require('./express');
    console.log("ID:10 :: avaliacao :: server.js");

var db = mongoose();
var app = express(db);

   app.listen(3045);
   console.log('Server running at http://localhost:3045/');
   module.exports = app;


