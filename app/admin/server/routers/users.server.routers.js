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

    app.route('/admin/users/profile/:id')
        .get(users.profile)
        .post(users.profile);

    app.route('/admin/users/add')
        .get(users.profile)
        .post(users.profile);

    app.route('/admin/users/view/:userId')
        .get(users.view)
        .post(users.view);

    app.route('/admin/users/edit/:userId')
        .get(users.edit)
        .post(users.edit);
        
    app.route('/admin/users/delete/:userId')
        .get(users.delete);

    app.get('/signout/', users.signout);

};




