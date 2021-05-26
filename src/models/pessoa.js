const mongoose = require('mongoose');

const pessoaSchema = new mongoose.Schema({
    nome: { type: String, require: true }, //nome obrigatório
    sobrenome: { type: String, require: true }, //sobrenome obrigatório
    createdAt: { type: Date}
})

module.exports = mongoose.model('Pessoa', pessoaSchema)