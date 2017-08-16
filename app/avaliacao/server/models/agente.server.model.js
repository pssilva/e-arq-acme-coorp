/**
 *  
 *   Agente - refere-se aos usuários que acessam o SIGAD. O agente pode se 
 *   apresentar como usuário, como papel desempenhado e como grupo a que 
 *   pertence. Grupos são conjuntos de usuários reunidos para realização 
 *   de uma atividade em comum, por tempo determinado. Papéis são funções 
 *   ou cargos com responsabilidades e autoridades bem definidas. Um usuário 
 *   pode estar associado a um ou mais papéis.
 * 
 * > Agentes relacionam-se entre si, uma vez que os usuários podem ser agregados
 *   em papéis e grupos. 
 *
 * > Agente relaciona-se com o evento de gestão pelo qual foi responsável.
 *  
 * > Agente relaciona-se com o evento de preservação pelo qual foi responsável.
 *  
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var agenteSchema = new Schema({
    "nome": { type: String, unique:true, required: true},  //Nome
    "identificador": { type: String, unique:true, required: true},  //Identificador
    "autorizacao_acesso": { type: String, required: true},  //Autorização de acesso
    "credenciais_autorizacao": { type: String, required: true},  //Credenciais de autenticação
    "relacao": { type: String},  //Relação
    "status": { type: String},  //Status do agente
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
    agenteSchema.post('save', function(next) {
         if(this.isNew) {
           console.log('A new [Agente] was created.');
         } else {
           console.log('A [Agente] updated is details.');
         }
    });

    agenteSchema.virtual('virtualFiels').get(function() {
        return 'virtualFiels';
    })
    .set(function(virtualFiels) {
        var sVirtualFiels = virtualFiels.split(' ');
    });

   agenteSchema.set('toJSON', { getters: true, virtuals: true });
   mongoose.model('Agente', agenteSchema);



