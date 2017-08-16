/**
 * New node file
 */
 var passport = require('passport'),
     LocalStrategy = require('passport-local').Strategy,
     User = require('mongoose').model('User');

module.exports = function() {
    passport.use(new LocalStrategy(function(username, password, done) {
        
        console.log("ID:11 :: local :: passport.use()"); 
        User.findOne({
            username: username
        }, function(err, user) {
            if (err) {
                return done(err);
            }
            
            if (!user) {
                return done(null, false, {
                    message: 'Unknown user'
                });
            }
            
            if (!user.authenticate(password)) {
                return done(null, false, {
                    message: 'Invalid password'
                }); 
            }

            console.log("ID:31 :: local :: passport.use()"); 
            return done(null, user,  {
                message: 'User OK',
                aMessage: ['XXX']
            });
        });
  }));
};


