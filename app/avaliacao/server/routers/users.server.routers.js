/**
 *
 *
 *
 */
var users = require('../controllers/users.server.controller'),
    index = require('../controllers/index.server.controller'),
    passport = require('passport');

module.exports = function(app) {

    app.route('/avaliacao/signup/')
        .get(users.renderSignup)
        .post(users.signup);

    app.route('/avaliacao/signin')// /avaliacao/signin
        .get(users.renderSignin)
        .post(users.login);

    app.route('/avaliacao/users/')
        .get(users.index);

    app.get('/signout/', users.signout);

};

