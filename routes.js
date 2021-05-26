  
const express = require("express");

const PessoaController = require("./src/controllers/pessoaController");
const salaEventoController = require("./src/controllers/salaEventoController");

const routes = express.Router();

routes.post("/pessoa", PessoaController.create);
routes.get("/pessoa/", PessoaController.getAll);
routes.get("/pessoa/:nome", PessoaController.getByName);
routes.delete("/pessoa/:id", PessoaController.deleteById);

routes.post("/salaEvento", salaEventoController.create);
routes.get("/salaEvento/:id", salaEventoController.getById);
routes.put("/salaEvento/:id", salaEventoController.updateById);


module.exports = routes;