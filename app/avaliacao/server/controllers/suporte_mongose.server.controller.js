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


exports.loadClasseTemporalizada = function(req, res) {

  for (var i = 15; i > 0; i--) {

    var classeTempo = new Classe({
        "classe_codigo": "classe_codigo - " +i, //{ type: String, unique:true, required: true},  //Classe_código
        "prazo_corrente": "prazo_corrente",//{ type: String},  //Prazo de guarda na fase corrente
        "evento_prazo_corrente": "evento_prazo_corrente",//{ type: String},  //Evento que determina a contagem do prazo de guarda na fase corrente
        "prazo_intermediario": "prazo_intermediario", //{ type: String},  //Prazo de guarda na fase intermediária
        "evento_prazo_intermediario": "evento_prazo_intermediario",//{ type: String},  //Evento que determina a contagem do prazo de guarda na fase intermediária
        "destinacao": "destinacao", //{ type: String},  //Destinação final
        "registro_alteracao": "registro_alteracao",//{ type: String},  //Registro de alteração
        "Observacoes": "Observacoes",//{ type: String},  //Observações
        "classe_id": { type: mongoose.Schema.Types.ObjectId, ref: 'Classe'},   //Classe
      });

      classeTempo.save(function(err) {
        if (err) {
          console.log("ID:140 :: classeTempo() :: i = " + i );
          console.log(err);
        }
      });
  };
  
}






