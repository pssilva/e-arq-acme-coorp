/**
 *   Evento de gestão - refere-se às ações de gestão que ocorrem com 
 *   os documentos arquivísticos ao longo de seu ciclo de vida, como captura, 
 *   tramitação, abertura e encerramento de processo/dossiê, classificação,
 *   desclassificação, eliminação, transferência, recolhimento, entre outros.
 *  
 * > Evento de gestão relaciona-se com o documento e com o agente responsável pela ação.
 *  
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var eventoGestaoSchema = new Schema({
        "captura": { type: String},  //Captura
        "tramitacao": { type: String},  //Tramitação
        "transferencia": { type: String},  //Transferência
        "recolhimento": { type: String},  //Recolhimento
        "eliminacao": { type: String},  //Eliminação
        "abertura_processo": { type: String},  //Abertura_processo/dossiê
        "encerramento_processo": { type: String},  //Encerramento_processo/dossiê
        "reabertura_processo": { type: String},  //Reabertura_processo/dossiê
        "abertura_volume": { type: String},  //Abertura_volume
        "encerramento_volume": { type: String},  //Encerramento_volume
        "juntada_anexacao": { type: String},  //Juntada_anexação
        "juntada_apensacao": { type: String},  //Juntada_apensação
        "desapansacao": { type: String},  //Desapensação
        "desentranhamento": { type: String},  //Desentranhamento
        "desmembramento": { type: String},  //Desmembramento
        "classificacao_sigilo": { type: String},  //Classificação_sigilo
        "desclassificacao_sigilo": { type: String},  //Desclassificação_sigilo
        "reclassificacao_sigilo": { type: String},  //Reclassificação_sigilo
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
    eventoGestaoSchema.pre('save', function(next) {
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
    eventoGestaoSchema.post('save', function(next) {
         if(this.isNew) {
           console.log('A new user was created.');
         } else {
           console.log('A user updated is details.');
         }
    });

    eventoGestaoSchema.virtual('virtualFiels').get(function() {
        return 'virtualFiels';
    })
    .set(function(virtualFiels) {
        var sVirtualFiels = virtualFiels.split(' ');
    });

   eventoGestaoSchema.set('toJSON', { getters: true, virtuals: true });
   mongoose.model('EventoGestao', eventoGestaoSchema);



