/**
 *
 *
 *
 */
var users = require('../controllers/users.server.controller'),
    index = require('../controllers/index.server.controller'),
    passport = require('passport');

module.exports = function(app) {

    app.route('/admin/signup/')
        .get(users.renderSignup)
        .post(users.signup);

    app.route('/admin/signin/')
        .get(users.renderSignin)
        .post(users.login);

    app.route('/admin/users/')
        .get(users.index);

    app.get('/signout/', users.signout);

};




