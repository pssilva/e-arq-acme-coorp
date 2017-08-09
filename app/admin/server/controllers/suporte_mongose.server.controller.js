/**
  * 
  * 
  * 
  * 
  */

var User = require('mongoose').model('User');
var userControll = require('./users.server.controller');

exports.render = function(req, res) {

    console.log("ID:12 :: suporte_mongose.server.controller.js ");
    
    res.status(res.statusCode)
       .render('index', {
           pathTheme: 'AdminLTE',
           title: ':: Site Administrativo :: Controller',
           user: JSON.stringify(req.user)
       });
};

exports.loadDB = function(req, res) {

    console.log("ID:25 :: index.server.controller.js ");
    
    if (req.session.lastVisit) {
        console.log("ID:27 :: index.server.controller: " + req.session.lastVisit);
    }
    
    req.session.lastVisit = new Date();

    this.loadUsers(req, res);
    console.log("ID:35 :: loadDB() ");
    
    res.status(res.statusCode)
      .render('index',{
          pathTheme: '/AdminLTE',
          title: ':: Site Admin :: Suporte :: loadDB()',
          user: JSON.stringify(req.user)
      });
};   

exports.loadUsers = function(req, res) {

  //res.setHeader("Content-Type", "text/html");
  for (var i = 100; i >= 0; i--) {
      
      var user = new User({
        firstName: "Paulo Sérgio ("+i+")",
        lastName: "Silva", 
        email: "pssilva"+i+"@localhost.co",
        role: "Public",
        username: "pssilva"+i+"@localhost.co",
        password: "3386admin_"+i
      });

      user.save();
  };
    

};




