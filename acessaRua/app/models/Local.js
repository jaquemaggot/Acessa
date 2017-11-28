//Nunca muda
var mongoose = require('mongoose');

module.exports = function () {
    var Schema = mongoose.Schema({
        endereco: {
            type: String,
            //Campo obrigatorio
            required: true
        },
        bairro: {
            //Relacionamento externo.
            type: String,
            required: true
        },
        cep: {
            //Relacionamento externo.
            type: Number,
            required: true
        },
        imagem: {
            type: mongoose.Schema.ObjectId,
            ref: 'Imagem',
            required: true
        },
        usuario: {
            type: mongoose.Schema.ObjectId,
            ref: 'Usuario',
            required: true
        },
        localizacao: {
            type: mongoose.Schema.ObjectId,
            ref: 'Geolocalizacao',
            required: true
        }
    });
    return mongoose.model('Local', Schema, 'locais');
}