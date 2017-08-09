/**
 * New node file
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var grupoSchema = new Schema({
    "nome": { type: String, unique:true, required: true},  //Nome
    "codigo": { type: String, unique:true, required: true},  //Nome
    "descricao": { type: String},  //Nome
    "parent_id": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Grupo',
        "default": "Public"
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
    grupoSchema.pre('save', function(next) {
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
    grupoSchema.post('save', function(next) {
         if(this.isNew) {
           console.log('A new user was created.');
         } else {
           console.log('A user updated is details.');
         }
    });

    grupoSchema.virtual('virtualFiels').get(function() {
        return 'virtualFiels';
    })
    .set(function(virtualFiels) {
        var sVirtualFiels = virtualFiels.split(' ');
    });

   grupoSchema.set('toJSON', { getters: true, virtuals: true });
   mongoose.model('Grupo', grupoSchema);



