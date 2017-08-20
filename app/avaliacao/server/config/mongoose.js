/**
 * 
 * 
 * 
 */
var config = require('./config'),
    options = {useMongoClient: true, promiseLibrary: require('bluebird')}, 
    mongoose = require('mongoose');

module.exports = function() {

    var db = mongoose.connection.openUri(config.db, options);

    /** Models de Avaliação da aplicação. */
    require('../../../avaliacao/server/models/agente.server.model');
    require('../../../avaliacao/server/models/classe.server.model');
    require('../../../avaliacao/server/models/classe_temporalidade.server.model');
    require('../../../avaliacao/server/models/componente_digital.server.model');
    require('../../../avaliacao/server/models/documento.server.model');
    require('../../../avaliacao/server/models/evento_gestao.server.model');
    require('../../../avaliacao/server/models/evento_prestacao.server.model');
    require('../../../avaliacao/server/models/aluguel.server.model');
    require('../../../avaliacao/server/models/avaliacao.server.model');

    require('../../../core/server/models/user.server.model');
    /**#autoInsertRequire#*/

    mongoose.connection.on('connected', function () {
        console.log('ID:21 :: Mongoose connected to ' + config.db);
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
