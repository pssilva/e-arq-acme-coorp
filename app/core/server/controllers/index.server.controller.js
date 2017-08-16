 /**
  * 
  * 
  */

var UserControllerApp = require('./users.server.controller');
exports.render = function(req, res) {

    var userControl = new UserControllerApp();
    userControl.requiresLogin(req, res, next());

    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }
    
    req.session.lastVisit = new Date();
    
    res.status(res.statusCode)
       .render('index',{
           pathTheme: '/AdminLTE',
           title: 'Hello World',
           aMessage: [],
           user: JSON.stringify(req.user)
       });
};  