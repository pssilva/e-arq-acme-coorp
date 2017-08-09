/**
  * 
  * 
  * 
  * 
  */
var User = require('mongoose').model('User');

exports.render = function(req, res) {

    console.log("ID:13 :: avaliacao :: suporte_mongose.server.controller.js ");
    
    res.status(res.statusCode)
       .render('index', {
           pathTheme: 'AdminLTE',
           layoutPages: 'LayoutPages',
           title: ':: Site Avaliação :: Controller',
           user: JSON.stringify(req.user)
       });
};

exports.loadDB = function(req, res) {

  this.loadUsers(req, res);
  console.log("ID:41 :: loadDB() ");
    
    res.status(res.statusCode)
      .render('index',{
          pathTheme: '/AdminLTE',
          title: 'Suporte :: loadDB()',
          user: JSON.stringify(req.user)
      });
};   

exports.loadUsers = function(req, res) {

  
};




