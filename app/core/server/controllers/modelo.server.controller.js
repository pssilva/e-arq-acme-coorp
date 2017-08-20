/**
  * 
  * 
  * 
  * 
  */

var UserControll = require('./users.server.controller');

exports.render = function(req, res) {
    
  console.log("ID:10 :: modelo.server.controller.js ");
  if (!req.isAuthenticated()) return res.redirect('/modelo/signin');
    
    res.status(res.statusCode)
       .render('modelo',{
           pathTheme: 'AdminLTE',
           title: ':: Site modelo :: Controller',
           user: JSON.stringify(req.user)
       });
};

/**
  * 
  * 
  */
exports.index = function(req, res) {
  console.log("ID:28 :: modelo.server.controller :: index() ");
  if (!req.isAuthenticated()) return res.redirect('/modelo/signin');

  UserControll.isAuthenticated(req, res, function(){
      res.status(res.statusCode)
         .render('index',{
             pathTheme: 'AdminLTE',
             title: ':: Site Modelo :: Controller',
             aMessage: ['Conteúdo da página Index Modelo'],
             user: JSON.stringify(req.user)
         });
    });

};  

/**
  * 
  * 
  */
exports.add = function(req, res) {
  console.log("ID:48 :: modelo.server.controller :: add() ");
  if (!req.isAuthenticated()) return res.redirect('/modelo/signin');

  res.status(res.statusCode)
     .render('add',{
         pathTheme: 'AdminLTE',
         title: ':: Site Modelo :: Controller',
         aMessage: ['Conteúdo da página Cadastro Modelo'],
         user: JSON.stringify(req.user)
     });

}; 

/**
  * 
  * 
  */
exports.edit = function(req, res, id) {
  console.log("ID:66 :: modelo.server.controller :: edit() ");
  if (!req.isAuthenticated()) return res.redirect('/modelo/signin');

  res.status(res.statusCode)
     .render('edit',{
         pathTheme: 'AdminLTE',
         title: ':: Site Modelo :: Controller',
         aMessage: ['Conteúdo da página Editar modelo'],
         user: JSON.stringify(req.user)
     });

}; 

/**
  * 
  * 
  */
exports.delete = function(req, res, id) {
  console.log("ID:84 :: modelo.server.controller :: delete() ");
  if (!req.isAuthenticated()) return res.redirect('/modelo/signin');

  res.status(res.statusCode)
     .render('inde',{
         pathTheme: 'AdminLTE',
         title: ':: Site Modelo :: Controller',
         aMessage: ['Conteúdo da página Deletar modelo'],
         user: JSON.stringify(req.user)
     });

}; 





