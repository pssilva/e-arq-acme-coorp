/*
 *  Componente digital refere-se aos objetos digitais que compõem o documento
 *  arquivístico digital. De modo geral, pode-se dizer que componentes 
 *  digitais são os arquivos de computador que contêm as informações de 
 *  conteúdo, forma e composição necessárias à apresentação do documento 
 *  arquivístico. As ações de preservação são realizadas nos componentes 
 *  digitais.
￼*
 *  Este modelo deve ser entendido da seguinte maneira: Documento refere-se aos
 *  documentos arquivísticos que são gerenciados pelo SIGAD.
 *
 * > Cada documento está relacionado a um ou mais componentes digitais. 
 *   Um componente digital pode conter informações relativas a um ou mais documentos.
 *
 * > Uma série de eventos de preservação ocorre nos componentes digitais para 
 *   permitir o acesso continu- ado ao longo do tempo e deve ser registrada pelo SIGAD. 
 *   Cada componente digital está relacionado a uma série de eventos de preservação.
 * 
 */
 
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var componenteDigitalSchema = new Schema({
    
    "id_comp_digital": { type: String, unique:true, required: true},  //Identificador do componente digital
    "nome_oficial": { type: String, required: true},  //Nome original
    "caracteristica_tecnica": { type: String},  //Características técnicas
    "formato_arquivo": { type: String, required: true},  //formato de arquivo
    "armazenamento": { type: String},  //Armazenamento
    "ambiente_software": { type: String},  //Ambiente de software
    "ambiente_hardware": { type: String},  //Ambiente de hardware
    "dependendias": { type: String},  //Dependências
    "relacao_comp_digital": { type: String},  //Relação com outros componentes digitais
    "fixidade": { type: String},  //fixidade
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    created: {
         type: Date,
         "default": Date.now
    },
    modified: {
         type: Date,
         "default": Date.now
    }
 });

    /**
     * Usando Mongoose Middleware
     * Usando Pre-middleware
     * */
    componenteDigitalSchema.pre('save', function(next) {
        if (1==1) {
            console.log('Usando Pre-middleware.');
            next()
        } else {
            next(new Error('An Error Occured'));
        }
    });
    
    /**
     * Usando Mongoose Middleware
     * Usando Post-middleware
     * */
    componenteDigitalSchema.post('save', function(next) {
         if(this.isNew) {
           console.log('A new user was created.');
         } else {
           console.log('A user updated is details.');
         }
    });

    componenteDigitalSchema.virtual('virtualFiels').get(function() {
        return 'virtualFiels';
    })
    .set(function(virtualFiels) {
        var sVirtualFiels = virtualFiels.split(' ');
    });

   componenteDigitalSchema.set('toJSON', { getters: true, virtuals: true });
   mongoose.model('ComponenteDigital', componenteDigitalSchema);



