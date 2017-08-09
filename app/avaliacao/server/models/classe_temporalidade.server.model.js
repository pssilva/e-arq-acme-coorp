/**
 *   Classe Temporalidade - é parte complementar da entidade Classe.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

//Temporalidade associada à classe
var classeTemporalidadeSchema = new Schema({
    "classe_codigo": { type: String, unique:true, required: true},  //Classe_código
    "prazo_corrente": { type: String},  //Prazo de guarda na fase corrente
    "evento_prazo_corrente": { type: String},  //Evento que determina a contagem do prazo de guarda na fase corrente
    "prazo_intermediario": { type: String},  //Prazo de guarda na fase intermediária
    "evento_prazo_intermediario": { type: String},  //Evento que determina a contagem do prazo de guarda na fase intermediária
    "destinacao": { type: String},  //Destinação final
    "registro_alteracao": { type: String},  //Registro de alteração
    "Observacoes": { type: String},  //Observações
    "classe_id": { type: mongoose.Schema.Types.ObjectId, ref: 'Classe'},   //Classe
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
	classeTemporalidadeSchema.pre('save', function(next) {
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
	classeTemporalidadeSchema.post('save', function(next) {
	     if(this.isNew) {
	       console.log('A new user was created.');
	     } else {
	       console.log('A user updated is details.');
	     }
	});

	classeTemporalidadeSchema.virtual('virtualFiels').get(function() {
	    return 'virtualFiels';
	})
	.set(function(virtualFiels) {
		var sVirtualFiels = virtualFiels.split(' ');
	});

   classeTemporalidadeSchema.set('toJSON', { getters: true, virtuals: true });
   mongoose.model('classe_temporalidade', classeTemporalidadeSchema);



