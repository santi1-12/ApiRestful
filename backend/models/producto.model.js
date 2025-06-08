const mongoose = require("../config/database");

const schemaProducto = new mongoose.Schema({
    referencia: {
        type: String,
        required: [true, 'La referencia es obligatoria']
    },
    nombre: {
        type: String,
        required: [true, 'Asignar un nombre es obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripcion es obligatoria']
    },
    precio: {
        type: Number,
        default: [0, 'El precio por defecto es cero'],
        min: [0, 'El stock por defecto es cero'],
    },
    stock: {
        type: Number,
        default: [0, 'El stock por defecto es cero'],
    },
    imagen: {
        type: String,
        required: [true, 'No existe la imagen o ruta a la imagen por defecto']
    },
    habilitado: {
        type: Boolean,
        default: true
    }
});

const producto = mongoose.model("producto", schemaProducto);
module.exports = producto;