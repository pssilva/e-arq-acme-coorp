/**
 *   Evento de preservação refere-se às ações de preservação realizadas 
 *   nos documentos arquivísticos digitais, tais como migração (atualização, 
 *   conversão), compressão, validação, decifração.
 *  
 * > Evento de preservação relaciona-se com o componente digital e com o agente 
 *   responsável pela ação de preservação.
 *
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var eventoPrestacaoSchema = new Schema({
    "compressao": { type: String, unique:true, required: true},  //Compressão
    "decifracao": { type: String, unique:true, required: true},  //Decifração
    "assinatura_digital": { type: String, unique:true, required: true},  //Validação de assinatura digital
    "fixidade": { type: String, unique:true, required: true},  //Verificação de fixidade
    "calculo_hash": { type: String, unique:true, required: true},  //Cálculo hash
    "migracao": { type: String, unique:true, required: true},  //Migração
    "replicacao": { type: String, unique:true, required: true},  //Replicação
    "verificacao": { type: String, unique:true, required: true},  //Verificação de vírus
    "validacao": { type: String, unique:true, required: true},  //Validação
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
    eventoPrestacaoSchema.pre('save', function(next) {
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
    eventoPrestacaoSchema.post('save', function(next) {
         if(this.isNew) {
           console.log('A new user was created.');
         } else {
           console.log('A user updated is details.');
         }
    });

    eventoPrestacaoSchema.virtual('virtualFiels').get(function() {
        return 'virtualFiels';
    })
    .set(function(virtualFiels) {
        var sVirtualFiels = virtualFiels.split(' ');
    });

   eventoPrestacaoSchema.set('toJSON', { getters: true, virtuals: true });
   mongoose.model('EventoPrestacao', eventoPrestacaoSchema);



