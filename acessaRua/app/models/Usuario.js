
var mongoose = require('mongoose');
module.exports = function () {
    var Schema = mongoose.Schema({
        nome: {
            type: String,
            //Campo obrigatorio
            required: true
        },
        telefone: {
            type: String,
            //Campo obrigatorio
            required: true
        },
        login:{
            type: String,
            //Campo obrigatorio
            required: true
        },
        senha: {
            type: String,
            //Campo obrigatorio
            required: true
        }
    });
  
    return mongoose.model('Usuario', Schema);
}