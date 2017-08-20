/**
  *
  *
  *
  */
var UserControllerApp = require('../../../core/server/controllers/users.server.controller');
    User = require('mongoose').model('User'),
    passport = require('passport'),
    fs = require('fs');

/**
  *
  */
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
    res.redirect('/avaliacao/signin/');
};

/**
  *
  */
exports.read = function(req, res) {
     res.json(req.user);
};

/**
  *
  */
exports.userByID = function(req, res, next, id) {
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
              console.log('bad');
              req.session.messages = [info.message];
              return res.redirect('/avaliacao/signin')
         }
         req.logIn(user, function (err) {
              console.log('good');
              if (err) { return next(err); }
              req.user = user;
              /** @doc: Implementar o carregamento dos avatares dos usuários */
              //req.user.logo = "/public/img/users/"+req.user.id+"/"+req.user.id+".png";
              req.session.isAuthenticated = true;
              return res.redirect('/avaliacao/add');
         });
    })(req, res, next);

};

/**
  *
  */
exports.create = function(req, res, next) {

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
    User.find({}, function(err, users) {
      if (err) {
         return next(err);
      } else {
         return res.status(res.statusCode)
           .render('users/index',{
              title: 'Listagem de Usuários',
              pathTheme: 'AdminLTE',
              aMessage: ['Conteúdo da página Index Admin'],
              UserList: users,
              user: JSON.stringify(req.users)
           });
      } 
    });
};

/**
  *
  */
exports.list = function(req, res, next) {
    User.find({}, function(err, users) {
      if (err) {
         return next(err);
      } else {
         res.json(users);
      } 
    });
};




