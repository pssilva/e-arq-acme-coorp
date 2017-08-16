/**
 * New node file
 * Deve-se criar a variável de ambiente:
 * $export NODE_ENV=development
 * $export SESSION_SECRET=??????
 * $export FACEBOOK_APP_ID=??????
 * $export FACEBOOK_APP_SECRET=??????
 * $export TWITTER_APP_ID=??????
 * $export TWITTER_APP_SECRET=??????
 * $export GOOGLE_APP_ID=??????
 * $export GOOGLE_APP_SECRET=??????
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.SESSION_SECRET = process.env.SESSION_SECRET || 'developmentSessionSecret';
//process.env.FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID || '??????';
//process.env.FACEBOOK_SESSION_SECRET = process.env.FACEBOOK_APP_SECRET || '###$$$$';
//process.env.TWITTER_APP_ID = process.env.FACEBOOK_APP_ID || '??????';
//process.env.TWITTER_APP_SECRET = process.env.FACEBOOK_APP_SECRET || '###$$$$';

console.log("ID:20 :: admin :: server.js");

var mongoose = require('./mongoose'),
    express = require('./express'),
    passport = require('../../../core/server/config/passport');
   
var db = mongoose(),
    app = express(db),
    passport = passport();
    
   app.listen(3034);
   console.log('Server running at http://localhost:3034/');
   module.exports = app;
