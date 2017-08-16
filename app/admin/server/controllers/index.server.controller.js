/**
  * 
  * 
  * 
  * 
  */
var UserControll = require('./users.server.controller');

exports.render = function(req, res) {
    
    console.log("ID:12 :: Admin ::index.server.controller ");

    if (req.session.lastVisit) {
        console.log("ID:11 :: index.server.controller: " + req.session.lastVisit);
    }
    
    req.session.lastVisit = new Date();
    
    if (req.user) {
      console.log("ID:21 :: Admin ::index.server.controller ");
      console.log("req.user");
      console.log(req.user);
    }

    UserControll.isAuthenticated(req, res, function(){
      res.status(res.statusCode)
         .render('index',{
             pathTheme: 'AdminLTE',
             title: ':: Site Administrativo :: Controller',
             aMessage: ['Conteúdo da página Index Admin'],
             user: JSON.stringify(req.user)
         });
    });
};
