/**
 * New node file
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var pessoaFisicaSchema = new Schema({

    "cpf": {
         type: String, 
         trim: true,
         unique: true,
         required: true
    },
    "pessoa_id": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pessoa'
    },
    "createdBy": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    "created": {
         type: Date,
         "default": Date.now
    },
    "modified": {
         type: Date,
         "default": Date.now
    }
   });

    /**
     * Usando Mongoose Middleware
     * Usando Pre-middleware
     * */
    pessoaFisicaSchema.pre('save', function(next) {
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
    pessoaFisicaSchema.post('save', function(next) {
         if(this.isNew) {
           console.log('A new user was created.');
         } else {
           console.log('A user updated is details.');
         }
    });

    pessoaFisicaSchema.virtual('virtualFiels').get(function() {
        return 'virtualFiels';
    })
    .set(function(virtualFiels) {
        var sVirtualFiels = virtualFiels.split(' ');
    });

   pessoaFisicaSchema.set('toJSON', { getters: true, virtuals: true });
   mongoose.model('PessoaFisica', pessoaFisicaSchema);



