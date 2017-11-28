//Nunca muda
var mongoose = require('mongoose');

module.exports = function () {
    var Schema = mongoose.Schema({
        texto: {
            type: String,
            //Campo obrigatorio
            required: true
        },
        imagem:{
            //Relacionamento externo.
            type: mongoose.Schema.ObjectId,
            ref: 'Imagem',
            required: true
        }
    });
    return mongoose.model('Comentario', Schema);
}