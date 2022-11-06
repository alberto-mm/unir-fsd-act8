const { Schema, model } = require('mongoose');

const inmuebleModel = new Schema({
    piso: {
        type: Number,
        required: [true, 'El piso es un campo requerido']
    },
    letra: String,
    extension: {
        type: Number,
        required: [true, 'La extensión es un campo requerido']
    },
    num_habitaciones: {
        type: Number,
        required: [true, 'El número de habitaciones es un campo requerido']
    },
    alquilado: {
        type: Boolean,
        required: [true, 'Si el inmueble se encuentra en alquiler es un campo requerido']
    },
    nombre_propietario: {
        type: String,
        required: [true, 'El nombre del propietario es un campo requerido']
    },
    email_contacto: {
        type: String,
        validate: {
            validator: (value) => {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
            },
            message: 'El email no es válido'
        },
        required: [true, 'El email es un campo requerido']
    }
});

module.exports = model('inmueble', inmuebleModel, 'inmuebles');