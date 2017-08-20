/**
  * 
  * 
  * 
  * 
  */

var mongoose = require('mongoose'),
    UserControll = require('./users.server.controller'),
    Avaliacao = require('mongoose').model('Avaliacao'),
    Documento = require('mongoose').model('Documento'),
    ComponenteDigital = require('mongoose').model('ComponenteDigital'),
    parse = require('url').parse,
    inspect = require('util').inspect;

exports.avaliacaoId = "";

exports.render = function(req, res) {
    
  console.log("ID:12 :: avaliacao.server.controller.js ");
  res.status(res.statusCode)
     .render('avaliacao',{
         pathTheme: 'AdminLTE',
         title: ':: Site Avaliação :: Controller',
         user: req.user
     });
};

/**
  * 
  * 
  */
exports.index = function(req, res) {
  console.log("ID:33 :: avaliacao.server.controller :: index() ");
  if (!req.isAuthenticated()) return res.redirect('/avaliacao/signin');

  Avaliacao.find({}, function(err, avaliacoes){
    if(!err){

      console.log("ID:40 :: avaliacao.server.controller :: index() :: avaliacoes[20]");
      console.log(avaliacoes[20]);
      var restultObj = [];
      for (var i = avaliacoes.length - 1; i >= 0; i--) {
        restultObj[i] = avaliacoes[i];
        restultObj[i].conservacao_label = conservacao(avaliacoes[i].conservacao);
      };


      console.log("ID:48 :: avaliacao.server.controller :: index() :: restultObj[20]");
      console.log(restultObj[20].conservacao_label);
        

      res.status(res.statusCode)
        .render('Avaliacao/index',{
            pathTheme: 'AdminLTE',
            title: 'Listagem das Avaliações',
            aMessage: [],
            avaliacoes: restultObj,
            user: req.user
        });
    }
  })
  .populate('createdBy', 'fullName email')
  .populate('aluguel_id');

};  

/**
  * 
  * 
  */
exports.view = function(req, res) {
  console.log("ID:61 :: avaliacao.server.controller :: view() ");
  if (!req.isAuthenticated()) return res.redirect('/avaliacao/signin');

  Avaliacao.find({}, function(err, avaliacoes){
    if(!err){
      console.log("ID:34 :: avaliacao.server.controller :: index() avaliacoes = ");
      console.log(avaliacoes);
       res.status(res.statusCode)
         .render('Avaliacao/index',{
             pathTheme: 'AdminLTE',
             title: 'View da Avaliação',
             aMessage: ["Não implementado!!"],
             avaliacoes: avaliacoes,
             user: req.user
         });
    }
  })
  .populate('createdBy', 'fullName email')
  .populate('aluguel_id');

}; 

/**
  * 
  * 
  */
exports.add = function(req, res) {
  console.log("ID:53 :: avaliacao.server.controller :: add() ");
  if (!req.isAuthenticated()) return res.redirect('/avaliacao/signin');
  var aMessage = [];

  if(req.route["methods"].post) {
    var newAvaliacao =  new Avaliacao(req.body.avaliacao);
    newAvaliacao.createdBy = req.user._id;

    newAvaliacao.save(function(err){ 
      if (err) { 
        aMessage.push("Não foi possível salvar a Avaliação!!"); 
      } else { 
        aMessage.push("Avaliação salva com sucesso!"); 
      } 
      res.status(res.statusCode) 
         .render('Avaliacao/add',{ 
             pathTheme: 'AdminLTE', 
             title: 'Cadastro de Avaliação', 
             aMessage: aMessage, 
             user: req.user 
         }); 
    }); 
  };

  res.status(res.statusCode) 
     .render('Avaliacao/add',{ 
         pathTheme: 'AdminLTE', 
         title: 'Cadastro de Avaliação', 
         aMessage: aMessage, 
         user: req.user 
     }); 
}; 

/**
  * 
  * 
  */
exports.edit = function(req, res) {
  console.log("ID:111 :: avaliacao.server.controller :: edit() ");
  if (!req.isAuthenticated()) return res.redirect('/avaliacao/signin');

  var id = req.params.id,
      aMessage = [],
      sTitle = 'Edição de Avaliação' ;

  if(req.route["methods"].get) { 
    Avaliacao.findById(id, function(err, avaliacao){
       var aMessage = [],
        sTitle = 'Edição de Avaliação';

        if(!err){ 
          res.status(res.statusCode) 
            .render('Avaliacao/edit',{ 
              pathTheme: 'AdminLTE', 
              title: sTitle, 
              aMessage: aMessage, 
              avaliacao:avaliacao, 
              user: req.user 
            }); 
        } 
      })
      .populate('aluguel_id')
      .populate('componente_digital_id');
  } 

  if(req.route["methods"].post) {

      var upAvaliacao =  new Avaliacao(req.body.avaliacao),
           options = {new: true, upsert: true};
           upAvaliacao.createdBy = req.user._id;

      Avaliacao.findByIdAndUpdate(id, req.body.avaliacao, options, function(err, avaliacao){ 
        ComponenteDigital.findById(upAvaliacao.componente_digital_id, function(err, componenteDigital){
            var aMessage = [],
                sTitle = 'Edição de Avaliação',
                upAvaliacao =  new Avaliacao(req.body.avaliacao),
                options = {new: true, upsert: true};
             
            upAvaliacao._id = avaliacao._id;
            upAvaliacao.createdBy = req.user._id;
            upAvaliacao.componente_digital_id = componenteDigital;
                if(!err){ 
                  aMessage.push("Atualização realizada com sucesso!!"); 
                  res.status(res.statusCode) 
                     .render('Avaliacao/edit',{ 
                        pathTheme: 'AdminLTE', 
                        title: 'Edição da Avaliação', 
                        aMessage: aMessage, 
                        avaliacao:upAvaliacao, 
                        user: req.user 
                     }); 
                }
        });//ComponenteDigital
      });//Avaliacao.findByIdAndUpdate
  }
}; 

/**
  * 
  * 
  */
exports.delete = function(req, res, id) {
  console.log("ID:98 :: avaliacao.server.controller :: delete() ");
  if (!req.isAuthenticated()) return res.redirect('/avaliacao/signin');

  res.status(res.statusCode)
     .render('index',{
         pathTheme: 'AdminLTE',
         title: ':: Site Avaliação :: Controller',
         aMessage: ['Conteúdo da página Deletar Avaliação'],
         user: req.user
     });

}; 

/**
  * 
  * 
  */
exports.livros = function(req, res) {
  console.log("ID:118 :: avaliacao.server.controller :: livros() ");
  if (!req.isAuthenticated()) return res.redirect('/avaliacao/signin');  
  params = parse(req.url, true).query;

  var myQuery = ComponenteDigital.find({ 
    $or:[
      { "id": new RegExp(params.q, "i") },
      { "nome_oficial": new RegExp(params.q, "i") }
    ] 
  });

  myQuery.exec(function(err, componenteDigitals){ 
    var data = [];
    for (var i = componenteDigitals.length - 1; i >= 0; i--) {
      var nome_oficial = componenteDigitals[i].nome_oficial;
      data.push({ 
        id: componenteDigitals[i].id, 
        text: nome_oficial 
      }); 
    };
    return res.json(data);
  });
}; 

var conservacao = function (iConservacao) {
    var result = '1 - Ruin';
    switch(iConservacao) {
        case 0:
        case 1:
            result = '1 - Ruin';
            break;
        case 2:
            result = '2 - Regular';
            break;
        case 3:
            result = '3 - Bom';
            break;
        case 4:
            result = '4 - Ótimo';
            break;
        default:
            result = 'ND - Não Definido'
    }
    return result;
};





