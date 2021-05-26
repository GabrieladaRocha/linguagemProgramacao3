const SalaEvento = require('../models/salaEvento')

module.exports = {
    create: async function (req, res) {
        //console.log(req);
        SalaEvento.create(req.body, function (err, salaEvento) {
            if (err) {
                console.log(err)
                res.status(500).json({ status: "error", message: err.toString(), data: null });
            }
            else {
                res.json({ status: "success", message: "Cadastro adicionado com sucesso!", data: salaEvento });
            }
        });
    },
    getById: function (req, res) {
        SalaEvento.findOne({ id: req.params._id }, function (err, salaEvento) {
            if (err) {
                res.status(500).json({ status: "error", message: err.toString(), data: null });
            } else {

                res.json({ status: "success", message: "Cadastro encontrado!", data: salaEvento });
            }
        });
    },
    updateById: function (req, res) {
        SalaEvento.findOneAndUpdate({ id: req.params._id }, req.body, { new: true }, function (err, salaEvento) {
            if (err)
                res.status(500).json({ status: "error", message: err.toString(), data: null });
            else {
                res.json({ status: "success", message: "Cadastro atualizado com sucesso!", data: salaEvento });
            }
        });
    },
    deleteById: function (req, res) {
        SalaEvento.deleteOne({ id: req.params._id }, function (err, salaEvento) {
            if (err)
                res.status(500).json({ status: "error", message: err.toString(), data: null });
            else {
                res.json({ status: "success", message: "Cadastro deletado com sucesso!", data: null });
            }
        });
    },
    getAll: function (req, res) {
        SalaEvento.find()
            .exec()
            .then(
                function (salaEvento) {
                    res.json({ status: "success", message: "Cadastro encontrado!", data: salaEvento });
                },
                function (err) {
                    console.log(err)
                    res.status(500).json({ status: "error", message: err.toString(), data: null });
                }
            );
    },
}