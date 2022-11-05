const { Schema, model } = require('mongoose');

const inmuebleModel = new Schema({
    piso: Number,
    letra: String,
    extension: Number,
    num_habitaciones: Number,
    alquilado: Boolean,
    nombre_propietario: String,
    email_contacto: String
});

module.exports = model('inmueble', inmuebleModel, 'inmuebles');