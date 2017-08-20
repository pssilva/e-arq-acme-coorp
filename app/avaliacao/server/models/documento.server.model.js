/**
 * @doc:
 *  Documento - refere-se aos documentos arquivísticos que são gerenciados pelo SIGAD.
 *  
 * > Documentos arquivísticos relacionam-se entre si, formando agregações, denominadas 
 *   processos ou dossiês. Os documentos arquivísticos podem ser classificados e gerenciados 
 *   de duas formas: agregados em processos ou dossiês ou individualmente (documento a 
 *   documento). Os processos/dossiês, por sua vez, podem ser divididos em volumes.
 *   
 * > Todo documento arquivístico tem que ser relacionado a uma classe no momento da captura 
 *   para o SIGAD.
 *
 * > Todo documento arquivístico digital é composto por um ou mais componentes digitais.
 *
 * > Ao longo do ciclo de vida, uma série de eventos ocorre no documento, e eles devem ser 
 *   registrados no SIGAD. Cada documento arquivístico está relacionado a uma série de 
 *   eventos de gestão. 
 *
 */
var mongoose = require('mongoose'),
    componenteDigitalSchema = require('./componente_digital.server.model'),
    Schema = mongoose.Schema;

var documentoSchema = new Schema({
    "id_doc": {type: String, unique:true, required: true},   //Identificador do documento
    "num_doc": {type: String, unique:true, required: true},   //Número do documento
    "num_prot": {type: String},   //Número do protocolo
    "id_processo": {type: String},   //Identificador do processo/dossiê
    "num_processo": {type: String, required: true},   //Número do processo/dossiê
    "id_volume": {type: String},   //Identificador do volume
    "num_volume": {type: String},   //Número do volume
    "tipo_meio": {type: String},   //Tipo de meio
    "status": {type: String, required: true},   //Status
    "id_version": {type: String},   //Identificador de versão
    "titulo": {type: String, required: true},   //Título
    "descricao": {type: String},   //Descrição
    "assunto": {type: String},   //Assunto
    "autor": {type: String, required: true},   //Autor
    "destinatario": {type: String},   //Destinatário
    "originador": {type: String},   //originador
    "redator": {type: String},   //Redator
    "interessado": {type: String},   //Interessado
    "procedencia": {type: String},   //Procedência
    "id_componente": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ComponenteDigital'
    },  //Identificador do componente digital
    "genero": {type: String, required: true},   //Gênero
    "especie": {type: String},   //Espécie
    "tipo_doc": {type: String},   //Tipo
    "idiome": {type: String},   //Idioma
    "qtd_folhas": {type: String, required: true},   //Quantidade de folhas/página
    "num_sequencia_doc": {type: String, unique:true, required: true},   //Numeração sequencial dos documentos
    "indicacao_anexo": {type: String},   //Indicação de anexos
    "relacao_doc": {type: String},   //Relação com outros documentos
    "niveis_acesso": {type: String, required: true},   //Níveis de acesso
    "dt_producao": {type: Date, required: true, "default": Date.now},   //Data de produção
    "classe_id": {type: mongoose.Schema.Types.ObjectId, ref: 'Classe'},   //Classe
    "destinacao_prev": {type: String},   //Destinação prevista
    "prazo_guarda": {type: String},   //Prazo de guarda
    "localizacao": {type: String},   //localização
    "componente_digital": [componenteDigitalSchema],
    "createdBy": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    "created": {
         type: Date,
         "default": Date.now
    },
    "modified": {
         type: Date,
         "default": Date.now
    }
 });

    /**
     * Usando Mongoose Middleware
     * Usando Pre-middleware
     * */
    documentoSchema.pre('save', function(next) {
        if (1==1) {
            console.log('Usando Pre-middleware: Documento');
            next()
        } else {
            next(new Error('An Error Occured'));
        }
    });
    
    /**
     * Usando Mongoose Middleware
     * Usando Post-middleware
     * */
    documentoSchema.post('save', function(next) {
         if(this.isNew) {
           console.log('A new Documento was created.');
         } else {
           console.log('A Documento updated is details.');
         }
    });

    documentoSchema.virtual('virtualFiels').get(function() {
        return 'virtualFiels';
    })
    .set(function(numDoc) {
        var sNumDoc = numDoc.split(' ');
    });

   documentoSchema.set('toJSON', { getters: true, virtuals: true });
   mongoose.model('Documento', documentoSchema);



