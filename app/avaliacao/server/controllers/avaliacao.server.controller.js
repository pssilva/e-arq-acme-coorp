/**
  * 
  * 
  * 
  * 
  */
exports.render = function(req, res) {
    
    console.log("ID:10 :: avaliacao.server.controller.js ");
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }
    
    req.session.lastVisit = new Date();
    
    res.status(res.statusCode)
       .render('avaliacao',{
           pathTheme: 'AdminLTE',
           title: ':: Site Avaliação :: Controller',
           user: JSON.stringify(req.user)
       });
};   