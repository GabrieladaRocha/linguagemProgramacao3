const mongoose = require('mongoose');

const salaEventoSchema = new mongoose.Schema({
    nome: { type: String, required: true }, //nome obrigatório
    lotacao: { type: Number, required: true }, //lotação obrigatória
    createdAt: { type: Date} //data de criação do registro
})

module.exports = mongoose.model('SalaEvento', salaEventoSchema)