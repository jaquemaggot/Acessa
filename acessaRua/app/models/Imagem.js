//Nunca muda
var mongoose = require('mongoose');

module.exports = function () {
    var Schema = mongoose.Schema({
        url: {
            type: String,
            //Campo obrigatorio
            required: true
        },
        usuario: {
            //Relacionamento externo.
            type: mongoose.Schema.ObjectId,
            ref: 'Usuario',
            required: true
        }
    });
    return mongoose.model('Imagem', Schema, 'imagens');
}