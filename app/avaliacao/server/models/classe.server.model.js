/**
 *   Classe - refere-se aos diversos níveis de agregação do plano de 
 *   classificação: classes, subclasses, grupos e subgrupos, que são 
 *   organizados de forma hierárquica. Em cada classe estão associadas 
 *   informações a respeito da temporalidade e da destinação prevista 
 *   para os documentos nela classificados. Todas as alterações ocorridas 
 *   no plano de classificação devem ficar registradas nos metadados da classe.
 *
 * > As classes estão relacionadas aos documentos arquivísticos que foram nelas 
 *   classificados.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var classeSchema = new Schema({
    "classe_nome": {type: String, unique:true, required: true},  //Classe_nome
    "classe_codigo": {type: String, unique:true, required: true},  //Classe_código
    "classe_subordinacao": {type: String},  //Classe_subordinação
    "reg_cobertura": {type: String},  //Registro de abertura
    "reg_destinacao": {type: String},  //Registro de desativação
    "reativacao_classe": {type: String},  //Reativação de classe
    "reg_mudanca_nome": {type: String},  //Registro de mudança de nome de classe 
    "reg_deslocamento": {type: String},  //Registro de deslocamento de classe 
    "reg_extincao": {type: String},  //Registro de extinção
    "classe_status": {type: String,
        enum: ['1 - Status1', '2 - Status2', '3 - Status3', '4 - Status4'],
        "default": "2 - Status2"
    },  //Indicador de classe ativa/inativa
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
    classeSchema.post('save', function(next) {
         if(this.isNew) {
           console.log('A [classe] foi salva.');
         } else {
           console.log('A [classe] foi atualiziada.');
         }
    });

    classeSchema.virtual('virtualFiels').get(function() {
        return 'virtualFiels';
    })
    .set(function(virtualFiels) {
        var sVirtualFiels = virtualFiels.split(' ');
    });

   classeSchema.set('toJSON', { getters: true, virtuals: true });
   mongoose.model('Classe', classeSchema);



