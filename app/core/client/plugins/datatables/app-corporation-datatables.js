/*@!
 * @auth: Paulo Sérgio da Silva
 * @email: pss1suporte@gmail.com
 * @plugin: app-datatables-acme-corporation.js 
 * @description: O objetivo de centralizar as funções genéricas para o carregamento e apresentação dos dados em uma tabela básica.
 *
 * Datatables AcmeCorp v1.0.0 (http://www.acme-corporation.co.br/)
 * Copyright 2011-2017 AC, Pub.
 * Licensed under MIT ()
 */

if (typeof jQuery === 'undefined') { throw new Error('Component Type Fields\'s JavaScript requires jQuery') }

(function($){ 

  this.Register = {}; 

  var DatatablesCorp = function(){ 
    this.optionsDefault = { 
      "dom": 'Bfrtip',
      "buttons": [ 
          'pageLength', 
          'copy', 
          'excel', 
          'pdf', 
          'csv', 
          'print'
      ],
      "bPaginate": true, 
      "bLengthChange": true, 
      "bFilter": true, 
      "bSort": true, 
      "bInfo": true, 
      "bAutoWidth": false,      
    };
    this.listObjectDataTables = {};
    this.alertTestPlugin = function(){
      console.log("alertTestPlugin: Testando o plugin jQuery!");
      alert("alertTestPlugin: Testando o plugin jQuery!");
      return false;
    };
    this.alertActions = function(){
      alert("Mensagem padrão! \nDeve-se implementar esta ação!");
      return false;
    };

    this.main = function() { 
      console.log("Pai");
      var 
        ownerObject = this, 
        $tablesList = $("body").find("table"); 

      this.customDataTableButtons(); 
      $.each($tablesList, function(key, tableHtml){ 
        var $tableHtml = $(tableHtml),  
          oDataTable,
          idTable = $(tableHtml).attr("id"); 
          if($(tableHtml).attr("datatables") == "true" 
              || $(tableHtml).attr("datatables") == undefined){ 
            oDataTable = $tableHtml.dataTable(ownerObject.optionsDefault); 
            idTable = (typeof idTable != 'undefined')?idTable:$.Util.UUID(); 
            ownerObject.listObjectDataTables[idTable] = oDataTable; 
          } 

      }); 
    };  

    this.customDataTableButtons = function(){ 
      var 
        DataTable = $.fn.dataTable, 
        _dtButtons = DataTable.ext.buttons, 
        parentPrint = $.extend(true, {}, _dtButtons.print); 

      DataTable.Buttons.defaults.buttons['my_add'];
      $.extend( _dtButtons, {
        copy: function ( dt, conf ) {
          if ( _dtButtons.copyHtml5 ) {
             _dtButtons.copyHtml5.text = '<span class="fa fa-fw fa-copy"></span>';
             _dtButtons.copyHtml5.className = 'btn btn-primary btn-sm';
            return 'copyHtml5';
          }
          if ( _dtButtons.copyFlash && _dtButtons.copyFlash.available( dt, conf ) ) {
             _dtButtons.copyHtml5.text = '<span class="fa fa-fw fa-copy"></span>';
             _dtButtons.copyHtml5.className = 'btn btn-primary btn-sm';
            return 'copyFlash';
          }
        },
        csv: function ( dt, conf ) {
          // Common option that will use the HTML5 or Flash export buttons
          if ( _dtButtons.csvHtml5 && _dtButtons.csvHtml5.available( dt, conf ) ) {

            _dtButtons.csvHtml5.text = '<i class="fa fa-fw fa-table"></i>';
            _dtButtons.csvHtml5.className = 'btn btn-primary btn-sm';
            return 'csvHtml5';
          }
          if ( _dtButtons.csvFlash && _dtButtons.csvFlash.available( dt, conf ) ) {

            _dtButtons.csvFlash.text = '<i class="fa fa-fw fa-table"></i>';
            _dtButtons.csvFlash.className = 'btn btn-primary btn-sm';
            return 'csvFlash';
          }
        },
        excel: function ( dt, conf ) {
          // Common option that will use the HTML5 or Flash export buttons
          if ( _dtButtons.excelHtml5 && _dtButtons.excelHtml5.available( dt, conf ) ) {
            _dtButtons.excelHtml5.text = '<span class="fa fa-file-excel-o"></span>';
            _dtButtons.excelHtml5.className = 'btn btn-primary btn-sm';
            return 'excelHtml5';
          }
          if ( _dtButtons.excelFlash && _dtButtons.excelFlash.available( dt, conf ) ) {
            _dtButtons.excelFlash.text = '<span class="fa fa-file-excel-o"></span>';
            _dtButtons.excelFlash.className = 'btn btn-primary btn-sm';
            return 'excelFlash';
          }
        },
        pdf: function ( dt, conf ) {
          // Common option that will use the HTML5 or Flash export buttons
          if ( _dtButtons.pdfHtml5 && _dtButtons.pdfHtml5.available( dt, conf ) ) {
             _dtButtons.pdfHtml5.text = '<span class="fa fa-file-pdf-o"></span>';
             _dtButtons.pdfHtml5.className = 'btn btn-primary btn-sm';
            return 'pdfHtml5';
          }
          if ( _dtButtons.pdfFlash && _dtButtons.pdfFlash.available( dt, conf ) ) {
             _dtButtons.pdfHtml5.text = '<span class="fa fa-file-pdf-o"></span>';
             _dtButtons.pdfHtml5.className = 'btn btn-primary btn-sm';
            return 'pdfFlash';
          }
        },
        pageLength: function ( dt, conf ) {
          var lengthMenu = dt.settings()[0].aLengthMenu;
          var vals = $.isArray( lengthMenu[0] ) ? lengthMenu[0] : lengthMenu;
          var lang = $.isArray( lengthMenu[0] ) ? lengthMenu[1] : lengthMenu;
          var text = function ( dt ) {
            return dt.i18n( 'buttons.pageLength', {
              "-1": '<span class="fa fa-list"></span> Mostrar Todas as Linhas',
              _:    '<span class="fa fa-list"></span> Mostrar %d linhas'
            }, dt.page.len() );
          };

          return {
            extend: 'collection',
            text: text,
            className: 'btn btn-primary btn-sm',
            buttons: $.map( vals, function ( val, i ) {
              return {
                text: lang[i],
                action: function ( e, dt, button, conf ) {
                  dt.page.len( val ).draw();
                },
                init: function ( dt, node, conf ) {
                  var that = this;
                  var fn = function () {
                    that.active( dt.page.len() === val );
                  };

                  dt.on( 'length.dt'+conf.namespace, fn );
                  fn();
                },
                destroy: function ( dt, node, conf ) {
                  dt.off( 'length.dt'+conf.namespace );
                }
              };
            } ),
            init: function ( dt, node, conf ) {
              var that = this;
              dt.on( 'length.dt'+conf.namespace, function () {
                that.text( text( dt ) );
              } );
            },
            destroy: function ( dt, node, conf ) {
              dt.off( 'length.dt'+conf.namespace );
            }
          };
        },
        print:  {
            className: 'btn btn-primary btn-sm',

            text: function ( dt ) {
              return dt.i18n( 'buttons.print', '<i class="fa fa-print"></i>' );
            },

            action: function ( e, dt, button, config ) {
              parentPrint.action(e, dt, button, config);
            },

            title: '*',

            message: '',

            exportOptions: {},

            header: true,

            footer: false,

            autoPrint: true,

            customize: null
          }
      });
    };

    this.deleteRow = function(element, sIdRow){
      var r = confirm("Você realmente deseja deletar o registro: " + sIdRow + "!"),
          $form;

      if (r == true) {
        $form = $(element).parents('form');
        $.ajax({
          url: "delete/"+sIdRow, 
          success: function(result){
            alert(result.msn);
            window.location.reload(true);
          }
        });
      } 
    };

  }; 

    $.DatatablesCorp = new DatatablesCorp();
    $.DatatablesCorp.prototype = DatatablesCorp;

})(jQuery); 
