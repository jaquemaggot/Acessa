//Nunca muda
var mongoose = require('mongoose');
//atributos da tabela
//o que eu preciso???
module.exports = function () {
    var Schema = mongoose.Schema({
        latitude: {
            type: Number,
            //Campo obrigatorio
            required: true
        },
        longitude: {
            type: Number,
            required: true
        },
        zoom: {
            type: Number,
            required: true
        }
    });
    return mongoose.model('Geolocalizacao', Schema,'geolocalizacoes');
}