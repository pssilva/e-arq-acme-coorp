/**
  * 
  * 
  * 
  * 
  */
var UserControll = require('./users.server.controller');
var mongoose = require('mongoose');   
var User = require('mongoose').model('User');
var Agente = require('mongoose').model('Agente');
var Classe = require('mongoose').model('Classe');
var ClasseTemporalidade = require('mongoose').model('ClasseTemporalidade');
var ComponenteDigital = require('mongoose').model('ComponenteDigital');
var Documento = require('mongoose').model('Documento');
var Aluguel = require('mongoose').model('Aluguel');
var Avaliacao = require('mongoose').model('Avaliacao');
global.register = {};
/**
  *
  */
exports.render = function(req, res) {
  console.log("ID:12 :: Avaliação ::index.server.controller ");
  if (!req.isAuthenticated()) return res.redirect('/admin/signin');

  res.status(res.statusCode)
     .render('index',{
         pathTheme: 'AdminLTE',
         title: 'Administração',
         aMessage: ['Conteúdo da página Index Administração'],
         user: req.user// JSON.stringify(req.user)
     });
};

/**
  *
  */
exports.dashboard = function(req, res) { 
  console.log("ID:38 :: index.server.controller :: dashboard() "); 
  if (!req.isAuthenticated()) return res.redirect('/admin/signin'); 
  
  Avaliacao.find({}, function(err, avaliacoes) {
      if (err) {
         return next(err);
      } else {
        global.register["avaliacoes"] = avaliacoes;
      } 
  });

  Avaliacao.aggregate([ 
          { 
           // $sort: {nota_conteudo: 1},
            $group: { 
              _id: '$nota_conteudo', 
              count: {$sum: 1} 
            } 
          },
          {
              $sort: {
                  _id: 1
              }
          },
    ], function (err, result) { 

       global.register["NotaConteudoResult"] = result;

        Avaliacao.aggregate([ 
              { 
                $group: { 
                  _id: '$conservacao', 
                  count: {$sum: 1} 
                } 
              } ,
              {
                  $sort: {
                      _id: 1
                  }
              },

        ], function (err, result) { 

            var totalConservacao = 0;
            for (var i = result.length - 1; i >= 0; i--) { 
              result[i]["label"] = getConservacaoCase(result[i]._id); 
            }; 

              res.status(res.statusCode) 
                .render('Admin/dashboard',{ 
                   pathTheme: 'AdminLTE', 
                   title: 'Administração :: Dashboard', 
                   aMessage: [], //"Trabalho em progresso!"
                   totalConservacao: totalConservacao, 
                   NotaConteudoResult: global.register["NotaConteudoResult"],
                   totalAvaliacao: global.register["avaliacoes"].length,
                   dataDashbaord: result, 
                   user: req.user // JSON.stringify(req.user)
                });

        }); 

  }); 

 



};

/** 
  * 
  * 
  * 
  */
var getConservacaoCase = function (iConservacao) { 
        var result = '1 - Ruin';
        switch(iConservacao) { 
            //case 0:
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



