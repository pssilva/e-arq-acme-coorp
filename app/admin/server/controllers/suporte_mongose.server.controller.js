/**
  * 
  * 
  * 
  * 
  */
var mongoose = require('mongoose');   
var User = require('mongoose').model('User');
var Agente = require('mongoose').model('Agente');
var Classe = require('mongoose').model('Classe');
var ClasseTemporalidade = require('mongoose').model('ClasseTemporalidade');
var ComponenteDigital = require('mongoose').model('ComponenteDigital');
var Documento = require('mongoose').model('Documento');
var Aluguel = require('mongoose').model('Aluguel');
var Avaliacao = require('mongoose').model('Avaliacao');

var contentStr = [];

/**
  * Como pegar um número randomicamente?
  * var randomNumber = Math.floor(Math.random() * 55);
  */

var userControll = require('./users.server.controller');

/**
  *
  *
  */
exports.render = function(req, res) {

    console.log("ID:12 :: suporte_mongose.server.controller.js ");
    
    res.status(res.statusCode)
       .render('index', {
           pathTheme: 'AdminLTE',
           title: ':: Site Administrativo :: Controller',
           content: ' :: Conteúdo Suporte Mongoose :: ',
           user: JSON.stringify(req.user)
       });
};

/**
  *
  *
  */
exports.loadDB = function(req, res) {

    console.log("ID:25 :: index.server.controller.js ");
    
    if (req.session.lastVisit) {
        console.log("ID:27 :: index.server.controller: " + req.session.lastVisit);
    }
    
    req.session.lastVisit = new Date();
    contentStr.push("Conteúdo Suporte Mongoose :: exports.loadDB()");

    req.suporteMongo = this;
    this.loadUsers(req, res, function(err, users){
      contentStr.push("Carregar os dados de usuários: loadUsers");

      // req.suporteMongo.loadAgente(req, res);
      // contentStr.push("Carregar os dados de Agentes: loadAgente");

    });



    req.suporteMongo.loadClasse(req, res);
    contentStr.push("Carregar os dados da Classes: loadClasse");
    
    req.suporteMongo.loadDocumento(req, res, function(err){

      contentStr.push("Carregar os dados da Documento: loadDocumento");

      // req.suporteMongo.loadAluguel(req, res);
      // contentStr.push("Carregar os dados da Aluguel: loadAluguel");

    });

    return res.status(res.statusCode)
      .render('suporte_mongose',{
          pathTheme: 'AdminLTE',
          title: ':: Site Admin :: Suporte :: loadDB()',
          aMessage: contentStr,
          user: JSON.stringify(req.user)
      });


};

/**
  *
  *
  */
exports.loadUsers = function(req, res, next) {

  var userAdmin = new User({
        firstName: "Admin",
        lastName: "System", 
        email: "admin@localhost.co",
        role: "Admin",
        username: "admin@localhost.co",
        password: "3386admin",
        provider: 'local'
      });

  userAdmin.save();

  var agente = new Agente({
      "nome": userAdmin.firstName, //Nome
      "identificador": userAdmin.id, //Identificador
      "autorizacao_acesso": "autorizacao_acesso",//Autorização de acesso
      "credenciais_autorizacao": "Admin",//Credenciais de autenticação
      "relacao": "relacao",//Relação
      "status": "status",//Status do agente
      "createdBy": userAdmin.id
    });

    agente.save();

  for (var i = 100; i > 0; i--) {
      
      var user = new User({
        firstName: "firstName ("+i+")",
        lastName: "lastName", 
        email: "firstName.lastName-"+i+"@localhost.co",
        role: "Public",
        username: "firstName.lastName-"+i+"@localhost.co",
        password: "3386public",
        provider: 'local',
        "createdBy": userAdmin.id
      });

      user.save(function(err) {
        if (err) {
          console.log("ID:66 :: loadUsers() :: i = " + i );
          console.log(err);
        } 
      });

    agente = new Agente({
      "nome": user.firstName, //Nome
      "identificador": user.id, //Identificador
      "autorizacao_acesso": "autorizacao_acesso",//Autorização de acesso
      "credenciais_autorizacao": "Public",//Credenciais de autenticação
      "relacao": "relacao",//Relação
      "status": "status",//Status do agente
      "createdBy": userAdmin.id
    });

    agente.save();
  };
  next();
};

/**
  *
  *
  */
exports.loadClasse = function(req, res) {
  
  var i = "cb-001";
  var classe = new Classe({
        classe_nome: "Classe Básica",
        classe_codigo: "cb-001", 
        classe_subordinacao: "classe_subordinacao - " +i,
        reg_cobertura: "reg_cobertura - " +i,
        reg_destinacao: "reg_destinacao - "+i,
        reativacao_classe: "reativacao_classe - " +i,
        reg_mudanca_nome: 'reg_mudanca_nome - i '+i,
        reg_deslocamento: 'reg_deslocamento - i '+i,
        reg_extincao: 'reg_extincao - i '+i,
        classe_status: '2 - Status2'
      });

  var oClasse = classe.save(function(err) {
    if (err) {
      console.log("ID:149 :: loadClasse() :: i = " + i );
      console.log(err);
    }
  });

  // console.log("################################################################");
  // console.log("ID:120 :: classe i = " + i );
  // console.log(classe);

  var classeTempo = new ClasseTemporalidade({
    "classe_codigo": classe.classe_codigo, //Classe_código
    "prazo_corrente": "prazo_corrente", //Prazo de guarda na fase corrente
    "evento_prazo_corrente": "evento_prazo_corrente", //Evento que determina a contagem do prazo de guarda na fase corrente
    "prazo_intermediario": "prazo_intermediario", //Prazo de guarda na fase intermediária
    "evento_prazo_intermediario": "evento_prazo_intermediario", //Evento que determina a contagem do prazo de guarda na fase intermediária
    "destinacao": "destinacao", //Destinação final
    "registro_alteracao": "registro_alteracao",//Registro de alteração
    "Observacoes": "Observacoes", //Observações
    "classe_id": classe.id
  });


  for (var i = 15; i >= 1; i--) {

    var classe = new Classe({
        classe_nome: "classe_nome - "+i,
        classe_codigo: "classe_codigo - "+i, 
        classe_subordinacao: "classe_subordinacao - "+i,
        reg_cobertura: "reg_cobertura",
        reg_destinacao: "reg_destinacao - "+i,
        reativacao_classe: "reativacao_classe",
        reg_mudanca_nome: 'reg_mudanca_nome',
        reg_deslocamento: 'reg_deslocamento',
        reg_extincao: 'reg_extincao',
        classe_status: '2 - Status2'
      });

      var oClasse = classe.save(function(err) {
        if (err) {
          console.log("ID:137 :: loadClasse() :: i = " + i );
          console.log(err);
        }
      });

      // console.log("################################################################");
      // console.log("ID:120 :: classe i = " + i );
      // console.log(classe);

      var classeTempo = new ClasseTemporalidade({
        "classe_codigo": classe.classe_codigo, //"classe_codigo - " +i, //{ type: String, unique:true, required: true},  //Classe_código
        "prazo_corrente": "prazo_corrente",//{ type: String},  //Prazo de guarda na fase corrente
        "evento_prazo_corrente": "evento_prazo_corrente",//{ type: String},  //Evento que determina a contagem do prazo de guarda na fase corrente
        "prazo_intermediario": "prazo_intermediario", //{ type: String},  //Prazo de guarda na fase intermediária
        "evento_prazo_intermediario": "evento_prazo_intermediario",//{ type: String},  //Evento que determina a contagem do prazo de guarda na fase intermediária
        "destinacao": "destinacao", //{ type: String},  //Destinação final
        "registro_alteracao": "registro_alteracao",//{ type: String},  //Registro de alteração
        "Observacoes": "Observacoes", //{ type: String},  //Observações
        "classe_id": classe.id

        //"classe_id": {"_id": classe.id, "classe_nome": classe.classe_nome} //{ type: mongoose.Schema.Types.ObjectId, ref: 'Classe'},   //Classe
        //"createdBy": 
      });

      //console.log("################################################################");
      // console.log("ID:138 :: classeTempo i = " + i );
      // console.log(classeTempo);

      classeTempo.save(function(err) {
        if (err) {
          console.log("ID:140 :: classeTempo() :: i = " + i );
          console.log(err);
        }
      });   
  }; 
};

/**
  *
  *
  */
exports.loadComponenteDidital = function(req, res) {

  for (var i = 100; i > 0; i--) { 
    var componenteDigital = new ComponenteDigital({ 
      "id_comp_digital": "id_comp_digital - " + i, //Identificador do componente digital
      "nome_oficial": "nome_oficial", //Nome original
      "caracteristica_tecnica": "caracteristica_tecnica", //Características técnicas
      "formato_arquivo": "formato_arquivo", //formato de arquivo
      "armazenamento": "armazenamento", //Armazenamento
      "ambiente_software": "ambiente_software", //Ambiente de software
      "ambiente_hardware": "ambiente_hardware", //Ambiente de hardware
      "dependendias": "dependendias", //Dependências
      "relacao_comp_digital": "relacao_comp_digital", //Relação com outros componentes digitais
      "fixidade": "fixidade" //fixidade
    }); 

    componenteDigital.save(function(err) {
      if (err) {
        console.log("ID:172 :: ComponenteDigital() :: i = " + i );
        console.log(err);
      }
    });
  };

}

/**
  *
  *
  */
exports.loadDocumento = function(req, res, next) {

    var randomNumberClass = Math.floor(Math.random() * 15);
    var classeObject = Classe.find({"classe_nome": "classe_nome - "+randomNumberClass});

    var i = "Dossiê - 1";
    var DocDossie = new Documento({
        "id_doc": "id_doc - " +i, //Identificador do documento
        "num_doc": "num_doc - i " +i, //Número do documento
        "num_prot": "num_prot - i " +i, //Número do protocolo
        "id_processo": "id_processo - i " +i, //Identificador do processo/dossiê
        "num_processo": "num_processo - i " +i, //Número do processo/dossiê
        "id_volume": "id_volume - i " +i, //Identificador do volume
        "num_volume": "num_volume - i " +i, //Número do volume
        "tipo_meio": "tipo_meio - i " +i, //Tipo de meio
        "status": "status - i " +i, //Status
        "id_version": "id_version - i " +i, //Identificador de versão
        "titulo": "titulo - i " +i, //Título
        "descricao": "descricao - i " +i, //Descrição
        "assunto": "assunto - i " +i, //Assunto
        "autor": "autor - i " +i, //Autor
        "destinatario": "destinatario - i " +i, //Destinatário
        "originador": "originador - i " +i, //originador
        "redator": "redator - i " +i, //Redator
        "interessado": "interessado - i " +i, //Interessado
        "procedencia": "procedencia - i " +i, //Procedência
        "id_componente": "id_componente - i " +i,  //Identificador do componente digital
        "genero": "genero - i " +i,   //Gênero
        "especie": "especie - i " +i, //Espécie
        "tipo_doc": "tipo_doc - i " +i, //Tipo
        "idiome": "idiome - i " +i,  //Idioma
        "qtd_folhas": "qtd_folhas - i " +i, //Quantidade de folhas/página
        "num_sequencia_doc": "num_sequencia_doc - i " +i, //Numeração sequencial dos documentos
        "indicacao_anexo": "indicacao_anexo - i " +i, //Indicação de anexos
        "relacao_doc": "relacao_doc - i " +i,  //Relação com outros documentos
        "niveis_acesso": "niveis_acesso - i " +i,  //Níveis de acesso
        "classe_id": classeObject.id,//"classe_id - i " +i, //Classe
        "destinacao_prev": "destinacao_prev - i " +i, //Destinação prevista
        "prazo_guarda": "prazo_guarda - i " +i, //Prazo de guarda
        "localizacao": "localizacao - i " +i, //localização
    });

    DocDossie.save(function(err) {
      if (err) {
        console.log("ID:264 :: Documento() :: i = " + i );
        console.log(err);
      }
    });

    for (var i = 100; i > 0; i--) {
      randomNumberClass = Math.floor(Math.random() * 15);
      classeObject = Classe.find({"classe_nome": "classe_nome - "+randomNumberClass});
      var documento = new Documento({
          "id_doc": "id_doc - i " +i, //Identificador do documento
          "num_doc": "num_doc - i " +i, //Número do documento
          "num_prot": "num_prot - i " +i, //Número do protocolo
          "id_processo": "id_processo - i " +i, //Identificador do processo/dossiê
          "num_processo": "num_processo - i " +i, //Número do processo/dossiê
          "id_volume": "id_volume - i " +i, //Identificador do volume
          "num_volume": "num_volume - i " +i, //Número do volume
          "tipo_meio": "tipo_meio - i " +i, //Tipo de meio
          "status": "status - i " +i, //Status
          "id_version": "id_version - i " +i, //Identificador de versão
          "titulo": "titulo - i " +i, //Título
          "descricao": "descricao - i " +i, //Descrição
          "assunto": "assunto - i " +i, //Assunto
          "autor": "autor - i " +i, //Autor
          "destinatario": "destinatario - i " +i, //Destinatário
          "originador": "originador - i " +i, //originador
          "redator": "redator - i " +i, //Redator
          "interessado": "interessado - i " +i, //Interessado
          "procedencia": "procedencia - i " +i, //Procedência
          "id_componente": "id_componente - i " +i,  //Identificador do componente digital
          "genero": "genero - i " +i,   //Gênero
          "especie": "especie - i " +i, //Espécie
          "tipo_doc": "tipo_doc - i " +i, //Tipo
          "idiome": "idiome - i " +i,  //Idioma
          "qtd_folhas": "qtd_folhas - i " +i, //Quantidade de folhas/página
          "num_sequencia_doc": "num_sequencia_doc - i " +i, //Numeração sequencial dos documentos
          "indicacao_anexo": "indicacao_anexo - i " +i, //Indicação de anexos
          "relacao_doc": "relacao_doc - i " +i,  //Relação com outros documentos
          "niveis_acesso": "niveis_acesso - i " +i,  //Níveis de acesso
          "classe_id": classeObject.id, //"classe_id - i " +i, //Classe
          "destinacao_prev": "destinacao_prev - i " +i, //Destinação prevista
          "prazo_guarda": "prazo_guarda - i " +i, //Prazo de guarda
          "localizacao": "localizacao - i " +i, //localização
      });

      documento.save(function(err) {
        if (err) {
          console.log("ID:356 :: Documento() :: i = " + i );
          console.log(err);
        }
      });
    };
    next();
};

exports.loadAgente = function(req, res) {
  //var users =  [];
  User.find({}, function(err, users) {
    if(!err){
      console.log("ID:372 :: loadAgente() :: users.length = "); 
      console.log(users.length); 

      var randomNumberUser = Math.floor(Math.random() * users.length);

      var user = users[randomNumberUser];
      var agente = new Agente({
          "nome": user.firstName,//Nome
          "identificador": user.id, //Identificador
          "autorizacao_acesso": "autorizacao_acesso",//Autorização de acesso
          "credenciais_autorizacao": "credenciais_autorizacao: " + user.role,//Credenciais de autenticação
          "relacao": "relacao",//Relação
          "status": "status",//Status do agente
        });

        agente.save(function(err) { 
          if (err) { 
            console.log("ID:203 :: Agente() :: = ");
            console.log(err);
          }
        });

   }
  });
};

exports.loadAluguel = function(req, res){ 

  var doc = Documento.find({}); 
  var ag = Agente.find({}); 
  var docList = doc.exec(function(err, documentos, lists) { 
    if (!err) {  
      ag.exec(function(err, agentes) {
        if (!err) { 
            for (var i = 45; i >= 0; i--) {
                var randomNumber = Math.floor(Math.random() * 45);
                var aluquel = new Aluguel({
                  "agente_id": agentes[randomNumber].id, //Agente
                  "documento_id": documentos[randomNumber].id//Documento
                });
                aluquel.save();
            };
        } 
      });
    } 
  });

  contentStr = [];
  contentStr.push("Carregar os dados de Agentes: loadAgente");
  res.status(res.statusCode) 
    .render('suporte_mongose', { 
        pathTheme: 'AdminLTE', 
        title: ':: Suporte :: MongoDB :: Alugel', 
        aMessage: contentStr, 
        user: JSON.stringify(req.user) 
    }); 

}; 

exports.loadAvaliacao = function(req, res){ 

  Aluguel.find({}, function(err, alugueis){
    if(!err){ 
      for (var i = alugueis.length - 1; i >= 0; i--) {
        var randomNumberConservacao = Math.floor(Math.random() * 4);
        var randomNumberNotaConteudo = Math.floor(Math.random() * 10);
        var alugel = alugueis[i];

        var avaliacao = new Avaliacao({ 
            "aluguel_id": alugel.id, //Agente
            "conservacao": randomNumberConservacao,
            "nota_conteudo": randomNumberNotaConteudo, //Nota Conteudo
            "observacao": "Dados de teste: " + Date.now,//Observação
            createdBy: alugueis[i].agente_id//Crated By - Criado por
        });

        avaliacao.save();

      };
    }
  });

  contentStr = [];
  contentStr.push("Carregar os dados de Avaliação: loadAvaliacao");
  res.status(res.statusCode) 
    .render('suporte_mongose', { 
        pathTheme: 'AdminLTE', 
        title: ':: Suporte :: MongoDB :: Avaliação', 
        aMessage: contentStr, 
        user: JSON.stringify(req.user) 
    }); 
    

};










