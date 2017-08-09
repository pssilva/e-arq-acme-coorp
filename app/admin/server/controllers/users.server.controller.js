//users.server. controller.js

var User = require('mongoose').model('User');

exports.read = function(req, res) {
     res.json(req.user);
};

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



