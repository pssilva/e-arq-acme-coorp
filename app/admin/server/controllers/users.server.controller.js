/**
  *
  *
  *
  */
var UserControllerApp = require('../../../core/server/controllers/users.server.controller');
    User = require('mongoose').model('User'),
    passport = require('passport');

var getErrorMessage = function(err) {
    var message = '';
    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'Username already exists';
            break;
            default:
                message = 'Something went wrong';
        }
    } else {
        for (var errName in err.errors) {
            if (err.errors[errName].message) message = err.errors[errName].
               message;
            } 
    }
     return message;
};

/**
  *
  */
module.exports.prototype = UserControllerApp;

/**
  *
  */
exports.renderSignin = function(req, res, next) {
    if (!req.user) {

       res.status(res.statusCode)
           .render('login/signin',{
               title: 'Sign-in Form',
               pathTheme: 'AdminLTE',
               aMessage: ['Conteúdo da página Index Admin'],
               user: JSON.stringify(req.user)
           });
           
    } else {
      return res.redirect('/');
    }
};

/**
  *
  */
exports.renderSignup = function(req, res, next) {
    if (!req.user) {
        res.render('signup', {
            title: 'Sign-up Form',
            messages: req.flash('error')
        });
    } else {
      return res.redirect('/');
    }
};

/**
  *
  */
exports.signup = function(req, res, next) {
    
    if (!req.user) {
        var user = new User(req.body);
        var message = null;
        user.provider = 'local';
        user.save(function(err) {
            if (err) {
              var message = getErrorMessage(err);
              req.flash('error', message);
              return res.redirect('/signup');
            }
            req.login(user, function(err) {
              if (err) return next(err);
              return res.redirect('/');
            }); 
        });
    } else {
        return res.redirect('/');
    } 
};

/**
  *
  */
exports.signout = function(req, res) {
    req.user = null;
    req.session.isAuthenticated = false;
    req.logout();
    res.redirect('/admin/signin/');
};

/**
  *
  */
exports.read = function(req, res) { 
  if (!req.isAuthenticated()) return res.redirect('/admin/signin');
     res.json(req.user);
};

/**
  *
  */
exports.userByID = function(req, res, next, id) { 
  if (!req.isAuthenticated()) return res.redirect('/admin/signin');

     User.findOne({
       _id: id
     }, 
     function(err, user) {
        if (err) {
        	return next(err);
        } else {
        	req.user = user;
        	next();
		} 
	});
};

/**
  *
  */
exports.login = function(req, res, next) {

    passport.authenticate('local', function (err, user, info) {
         if (err) { return next(err) }
         if (!user) {
              req.session.messages = [info.message]; 
              return res.redirect('/admin/signin'); 
         } 
         req.logIn(user, function (err) { 
            if (err) { return next(err); } 
            req.user = user; 
            req.session.isAuthenticated = true; 
            return res.redirect('/admin/dashboard'); 
         }); 
    })(req, res, next); 

};

/**
  *
  */
exports.create = function(req, res, next) {
  if (!req.isAuthenticated()) return res.redirect('/admin/signin');

    var user = new User(req.body);
    user.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(user);
        }
    });

};

/**
  *
  */
exports.isAuthenticated = function(req, res, next) {
    if (!req.isAuthenticated()) {
      return res.status(res.statusCode)
           .render('login/signin',{
              title: 'Sign-in Form',
              pathTheme: 'AdminLTE',
              aMessage: ['Conteúdo da página Index Admin'],
              user: JSON.stringify(req.user)
           });
    }
  next();
};

/**
  *
  */
exports.index = function(req, res, next) {

  if (!req.isAuthenticated()) return res.redirect('/admin/signin');


 

    User.find({},function(err, users) {
      if (err) {
         return next(err);
      } else {
         res.status(res.statusCode)
           .render('users/index',{
              title: 'Listagem de Usuários',
              pathTheme: 'AdminLTE',
              aMessage: ['Conteúdo da página Index Admin'],
              UserList: users,
              user: req.user //JSON.stringify(req.user)
           });
      } 
    });
};

/**
  *
  */
exports.profile = function(req, res, next) { 
    if (!req.isAuthenticated()) return res.redirect('/admin/signin');

    User.find({}, function(err, users) { 
      if (err) { 
         return next(err); 
      } else { 
        res.status(res.statusCode)
           .render('users/profile',{ 
              title: 'Profile de Usuário', 
              pathTheme: 'AdminLTE', 
              aMessage: ['Conteúdo da página profile Admin'], 
              UserList: users, 
              user: req.user//JSON.stringify(req.user) 
           }); 
      } 
    }); 
};

/**
  *
  */
exports.list = function(req, res, next) {
  if (!req.isAuthenticated()) return res.redirect('/admin/signin');
    User.find({}, function(err, users) {
      if (err) {
         return next(err);
      } else {
         res.json(users);
      } 
    });
};

/**
  *
  */
exports.view = function(req, res, next) {
  if (!req.isAuthenticated()) return res.redirect('/admin/signin');

    User.find({}, function(err, users) { 
      if (err) { 
         return next(err); 
      } else { 
         res.status(res.statusCode) 
           .render('users/index',{ 
              title: 'View de Usuários', 
              pathTheme: 'AdminLTE', 
              aMessage: ['Trabalho em progresso: view()'], 
              UserList: users, 
              user: req.user //JSON.stringify(req.user) 
           }); 
      } 
    }); 
    
};

/**
  *
  */
exports.edit = function(req, res, next) {
  if (!req.isAuthenticated()) return res.redirect('/admin/signin');

    User.find({}, function(err, users) { 
      if (err) { 
         return next(err); 
      } else { 
         res.status(res.statusCode) 
           .render('users/index',{ 
              title: 'Edição de Usuários', 
              pathTheme: 'AdminLTE', 
              aMessage: ['Trabalho em progresso: edit()'], 
              UserList: users, 
              user: req.user //JSON.stringify(req.user) 
           }); 
      } 
    }); 
    
};

/**
  *
  */
exports.delete = function(req, res, next) {
  if (!req.isAuthenticated()) return res.redirect('/admin/signin');

    User.find({}, function(err, users) { 
      if (err) { 
         return next(err); 
      } else { 
         res.status(res.statusCode) 
           .render('users/index',{ 
              title: 'Listagem de Usuários', 
              pathTheme: 'AdminLTE', 
              aMessage: ['Trabalho em progresso: delete()'], 
              UserList: users, 
              user: req.user //JSON.stringify(req.user) 
           }); 
      } 
    }); 

};




