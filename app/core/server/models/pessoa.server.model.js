/**
 * New node file
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var pessoaSchema = new Schema({ 
    "code": { 
        type: String, 
        trim: true,
        unique: true,
        required: true
     },
    "endereco": {
        type: String, 
        trim: true
    },
    "endereco": {
        type: String, 
        trim: true
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
    pessoaSchema.pre('save', function(next) {
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
    pessoaSchema.post('save', function(next) {
         if(this.isNew) {
           console.log('A new user was created.');
         } else {
           console.log('A user updated is details.');
         }
    });

    pessoaSchema.virtual('virtualFiels').get(function() {
        return 'virtualFiels';
    })
    .set(function(virtualFiels) {
        var sVirtualFiels = virtualFiels.split(' ');
    });

   pessoaSchema.set('toJSON', { getters: true, virtuals: true });
   mongoose.model('Pessoa', pessoaSchema);



