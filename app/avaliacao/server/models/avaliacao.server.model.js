/**
 *   Avaliação - Processo de análise de documentos arquivísticos que estabelece seus 
 *   prazos de guarda e sua destinação de acordo com os valores que lhes são 
 *   atribuídos.
 *   
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var avaliacaoSchema = new Schema({ 
    "aluguel_id": { type: mongoose.Schema.Types.ObjectId, ref: 'Aluguel'}, //Agente
    "conservacao": { 
        type: Number, 
        enum: ['1 - Ruim', '2 - Regular','3 - Bom', '4 - Ótimo'], 
        "default": 3, 
        required: true 
    },
    "nota_conteudo": { type: Number, "default": 6, required: true},
    "observacao": { type: String, max: 256}, 
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    created: {type: Date,"default": Date.now},
    modified: {type: Date, "default": Date.now}
});
    
    /**
     * Usando Mongoose Middleware
     * Usando Post-middleware
     * */
    avaliacaoSchema.post('save', function(next) {
         if(this.isNew) {
           console.log('A new [avaliação] was created.');
         } else {
           console.log('A [avaliação] updated is details.');
         }
    });

    avaliacaoSchema.virtual('virtualFiels').get(function() {
        return 'virtualFiels';
    })
    .set(function(virtualFiels) {
        var sVirtualFiels = virtualFiels.split(' ');
    });

   avaliacaoSchema.set('toJSON', { getters: true, virtuals: true });
   mongoose.model('Avaliacao', avaliacaoSchema);



