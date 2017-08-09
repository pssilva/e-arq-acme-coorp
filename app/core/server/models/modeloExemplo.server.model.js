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
	 * Usando Pre-middleware
	 * */
	modeloExemploSchema.pre('save', function(next) {
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
	modeloExemploSchema.post('save', function(next) {
	     if(this.isNew) {
	       console.log('A new user was created.');
	     } else {
	       console.log('A user updated is details.');
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



