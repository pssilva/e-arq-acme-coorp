/**
 * New node file
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var pessoaJuridicaSchema = new Schema({

    "cnpj": {
        type: String, 
        trim: true,
        unique: true,
        required: true
    },
    "pessoa_id": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pessoa'
    },
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
    pessoaJuridicaSchema.pre('save', function(next) {
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
    pessoaJuridicaSchema.post('save', function(next) {
         if(this.isNew) {
           console.log('A new user was created.');
         } else {
           console.log('A user updated is details.');
         }
    });

    pessoaJuridicaSchema.virtual('virtualFiels').get(function() {
        return 'virtualFiels';
    })
    .set(function(virtualFiels) {
        var sVirtualFiels = virtualFiels.split(' ');
    });

   pessoaJuridicaSchema.set('toJSON', { getters: true, virtuals: true });
   mongoose.model('PessoaJuridica', pessoaJuridicaSchema);



