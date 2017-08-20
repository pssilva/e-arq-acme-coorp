/**
  * 
  * 
  * 
  * 
  */
var UserControll = require('./users.server.controller');

/**
  *
  */
exports.render = function(req, res) {
    
    console.log("ID:12 :: Avaliação ::index.server.controller ");

    if (req.session.lastVisit) {
        console.log("ID:11 :: index.server.controller: " + req.session.lastVisit);
    }
    
    req.session.lastVisit = new Date();
    
    if (req.user) {
      console.log("ID:21 :: Avaliação ::index.server.controller ");
      console.log("req.user");
      console.log(req.user);
    }

    UserControll.isAuthenticated(req, res, function(){
      res.status(res.statusCode)
         .render('index',{
             pathTheme: 'AdminLTE',
             title: ':: Site Avaliação :: Controller',
             aMessage: ['Conteúdo da página Index Avaliação'],
             user: JSON.stringify(req.user)
         });
    });
};
