/**
 * 
 * 
 * 
 */
var config = require('./config'),
    options = { useMongoClient: true, promiseLibrary: require('bluebird')},//{ server: { poolSize: 4 }},
    mongoose = require('mongoose');

module.exports = function() {
    
    var db = mongoose.connection.openUri(config.db, options);
    require('../../../core/server/models/pessoa_fisica.server.model');
    require('../../../core/server/models/pessoa_juridica.server.model');
    require('../../../core/server/models/pessoa.server.model');
    require('../../../core/server/models/grupos.server.model');
    require('../../../core/server/models/user.server.model');
    /**#autoInsertRequire#*/

    mongoose.connection.on('connected', function () {
        console.log('Mongoose connected to ' + config.db);
    });

    mongoose.connection.on('error',function (err) {
        console.log('Mongoose connection error: ' + err);
    });

    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose disconnected');
    });
    
    return db;
};

module.exports.close = function(adminConnection) {
    adminConnection.close(function () {
        console.log('Mongoose connection adminConnection closed');
    });
};
