/**
  * 
  * 
  * 
  * 
  */
exports.render = function(req, res) {
    
    console.log("ID:10 :: index.server.controller.js ");
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }
    
    req.session.lastVisit = new Date();
    
    res.status(res.statusCode)
       .render('index',{
           //pathTheme: '/gentelella',
           pathTheme: 'AdminLTE',
           title: ':: Site Administrativo :: Controller',
           //userFullName: req.user ? req.user.fullName : ''
           user: JSON.stringify(req.user)
       });
};   