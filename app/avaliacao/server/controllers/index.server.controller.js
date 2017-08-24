/**
  * 
  * 
  * 
  * 
  */
exports.render = function(req, res) {
    
  if (!req.isAuthenticated()) return res.redirect('/avaliacao/signin');
  console.log("ID:10 :: index.server.controller.js ");
    
    res.status(res.statusCode) 
       .render('index',{ 
           pathTheme: 'AdminLTE', 
           title: ':: Site Avaliação :: Controller', 
           aMessage: ['Conteúdo da página Index Avaliação'], 
           user: req.user 
       }); 
}; 
