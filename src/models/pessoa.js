const mongoose = require('mongoose');

const pessoaSchema = new mongoose.Schema({
    nome: { type: String, required: true }, //nome obrigatório
    sobrenome: { type: String, required: true }, //sobrenome obrigatório
    createdAt: { type: Date}
})

module.exports = mongoose.model('Pessoa', pessoaSchema)