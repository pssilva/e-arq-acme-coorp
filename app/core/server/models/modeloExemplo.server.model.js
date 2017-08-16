/**
 * New node file
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var modeloExemploSchema = new Schema({

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
	modeloExemploSchema.post('save', function(next) {
	     if(this.isNew) {
	       console.log('A new modeloExemplo was created.');
	     } else {
	       console.log('A modeloExemplo updated is details.');
	     }
	});

	modeloExemploSchema.virtual('virtualFiels').get(function() {
	    return 'virtualFiels';
	})
	.set(function(virtualFiels) {
		var sVirtualFiels = virtualFiels.split(' ');
	});

   modeloExemploSchema.set('toJSON', { getters: true, virtuals: true });
   mongoose.model('modeloExemplo', modeloExemploSchema);



