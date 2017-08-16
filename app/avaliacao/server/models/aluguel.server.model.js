/**
 * New node file
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var aluguelSchema = new Schema({
    "agente_id": { type: mongoose.Schema.Types.ObjectId, ref: 'Agente'}, //Agente
    "documento_id": { type: mongoose.Schema.Types.ObjectId, ref: 'Documento'}, //Documento
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
     * Usando Post-middleware
     * */
    aluguelSchema.post('save', function(next) {
         if(this.isNew) {
           console.log('A new [aluguel] was created.');
         } else {
           console.log('A [aluguel] updated is details.');
         }
    });

    aluguelSchema.virtual('virtualFiels').get(function() {
        return 'virtualFiels';
    })
    .set(function(virtualFiels) {
        var sVirtualFiels = virtualFiels.split(' ');
    });

   aluguelSchema.set('toJSON', { getters: true, virtuals: true });
   mongoose.model('Aluguel', aluguelSchema);



