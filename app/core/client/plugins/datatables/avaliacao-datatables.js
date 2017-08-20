/*@!
* @auth: Paulo Sérgio da Silva
* @email: pss1suporte@gmail.com
* @plugin: product-datatables.js 
* @description: O objetivo de centralizar as funções genéricas para o carregamento e apresentação dos dados em uma tabela básica.
*
* Component Type Fields v1.0.0 (http://www.acme-corporation.co.br/)
* Copyright 2011-2017 AcmeCorp, Pub.
* Licensed under MIT ()
*/

if (typeof jQuery === 'undefined') { throw new Error('Component Type Fields\'s JavaScript requires jQuery') }

(function($){ 

  this.modalDefault; 
  this.Register = {}; 

  var DatatablesAvaliacao = function(){ 
    this.DataTable = $.fn.dataTable;

    console.log($.DatatablesCorp);
    /** 
      @doc: Aqui extendemos a nossa class da classe DatatablesCorp 
      que se encontra em: js/acme-corporation/datatables/acme-corporation-datatables.js 
    */ 
    this.prototype = $.DatatablesCorp; 
    /*Aqui definimos o parent da classe.*/ 
    this.parent = this.prototype; 

    this.alertTestPlugin = function(){ 
      console.log("alertTestPlugin: Testando o plugin jQuery!"); 
      alert("alertTestPlugin: Testando o plugin jQuery!");
    }; 
    this.main = function(){ 
      this.parent.main(); 
    }; 
  }; 
  $.DatatablesAvaliacao = new DatatablesAvaliacao();
  $.DatatablesAvaliacao.prototype = DatatablesAvaliacao;
})(jQuery); 
$.DatatablesAvaliacao.main();