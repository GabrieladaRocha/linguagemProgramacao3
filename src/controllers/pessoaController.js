const Pessoa = require('../models/pessoa')

module.exports = {
    create: async function (req, res) {
        //console.log(req);
        Pessoa.create(req.body, function (err, pessoa) {
            if (err) {
                console.log(err)
                res.status(500).json({ status: "error", message: err.toString(), data: null });
            }
            else {
                res.json({ status: "success", message: "Cadastro adicionado com sucesso!", data: pessoa });
            }
        });
    },
    getByName: function (req, res) {
        Pessoa.find({ nome: req.params.nome }, function (err, pessoa) {
            if (err) {
                res.status(500).json({ status: "error", message: err.toString(), data: null });
            } else {

                res.json({ status: "success", message: "Cadastro encontrado!", data: pessoa });
            }
        });
    },
    deleteById: function (req, res) {
        Pessoa.deleteOne({ id: req.params._id }, function (err, pessoa) {
            if (err)
                res.status(500).json({ status: "error", message: err.toString(), data: null });
            else {
                res.json({ status: "success", message: "Cadastro deletado com sucesso!", data: null });
            }
        });
    },
    getAll: function (req, res) {
        Pessoa.find()
            .exec()
            .then(
                function (pessoa) {
                    res.json({ status: "success", message: "Cadastro encontrado!", data: pessoa });
                },
                function (err) {
                    console.log(err)
                    res.status(500).json({ status: "error", message: err.toString(), data: null });
                }
            );
    },
}