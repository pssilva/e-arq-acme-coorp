/*@!
 * @auth: Paulo Sérgio da Silva
 * @email: pss1suporte@gmail.com
 * @plugin: app-datatables-corporation.js
 * @description: O objetivo de centralizar as funções genéricas para o carregamento e apresentação dos dados em uma tabela básica.
 *
 * Datatables AcmeCorp v1.0.0 (http://www.acme-corporation.co.br/)
 * Copyright 2011-2017 AC, Pub.
 * Licensed under MIT ()
 */

if (typeof jQuery === 'undefined') { throw new Error('Component Type Fields\'s JavaScript requires jQuery') }


(function($){ 

    this.Register = {}; 

    var AppAcmeCorp = function(){

        this.alertActions = function(){
          alert("Mensagem padrão! \nDeve-se implementar esta ação!");
          return false;
        };

        this.main = function(){
          alert("XXXX");
          return false;
        };

    };

    $.AppAcmeCorp = new AppAcmeCorp();
    $.AppAcmeCorp.prototype = AppAcmeCorp;

})(jQuery); 