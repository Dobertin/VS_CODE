const mongoose = require('mongoose');

const TareaSchema = new mongoose.Schema({
    tareaID: Number,
    responsableID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Responsable',
        required: true
    },
    estadoID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Estado',
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    fechaModificacion: Date
});

module.exports = mongoose.model('Tarea', TareaSchema);
