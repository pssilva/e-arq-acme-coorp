/**
 *   Avaliação - Processo de análise de documentos arquivísticos que estabelece seus 
 *   prazos de guarda e sua destinação de acordo com os valores que lhes são 
 *   atribuídos.
 *   
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AvaliacaoSchema = new Schema({ 
    "aluguel_id": { type: mongoose.Schema.Types.ObjectId, ref: 'Aluguel'}, //Agente 
    "componente_digital_id": { type: mongoose.Schema.Types.ObjectId, ref: 'ComponenteDigital'}, //ComponenteDigital 
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
    modified: {type: Date, "default": Date.now},

});
    
    /**
     * Usando Mongoose Middleware
     * Usando Post-middleware
     * */
    AvaliacaoSchema.post('save', function(next) {
         if(this.isNew) {
           console.log('A new [avaliação] was created.');
         } else {
           console.log('A [avaliação] updated is details.');
         }
    });

    AvaliacaoSchema.virtual('virtualFiels')
        .get(function() {
            return 'virtualFiels';
        })
        .set(function(virtualFiels) {
            var sVirtualFiels = virtualFiels.split(' ');
        });

    AvaliacaoSchema.virtual('conservacao_label')
        .get(function() {
            return this.getConservacaoCase(this.conservacao);
        })
        .set(function(conservacao_label) {
            var iConservacao = conservacao_label.split("-");
            this.conservacao = iConservacao[0];
        });

    AvaliacaoSchema.methods.getConservacaoCase = function (iConservacao) { 
        var result = '1 - Ruin';
        switch(iConservacao) { 
            case 0:
            case 1:
                result = '1 - Ruin';
                break;
            case 2:
                result = '2 - Regular';
                break;
            case 3:
                result = '3 - Bom';
                break;
            case 4:
                result = '4 - Ótimo';
                break;
            default:
                result = 'ND - Não Definido'
        }
        return result;
    };

    AvaliacaoSchema.getConservacaoCase = AvaliacaoSchema.methods.getConservacaoCase;

    AvaliacaoSchema.set('toJSON', { getters: true, virtuals: true });
    mongoose.model('Avaliacao', AvaliacaoSchema);



