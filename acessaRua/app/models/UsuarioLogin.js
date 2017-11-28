
var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');
module.exports = function () {
    var schema = mongoose.Schema({
        login:{
            type: String,
            //Campo obrigatorio
            required: true
        },
        nome: {
            type: String,
            //Campo obrigatorio
        },
        email: {
            type: String,
            //Campo obrigatorio
            required : true
        },
        dataInclusao: {
            type: Date,
            //Campo obrigatorio
           default : Date.now
        }
    });
    schema.plugin(findOrCreate);
    return mongoose.model('UsuarioLogin', schema);
}