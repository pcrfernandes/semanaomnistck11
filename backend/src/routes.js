const express = require("express");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

routes.get("/users/:id", (request, response) => {
  const params = request.params;
  const id = params.id;
  //response.send("uepa");
  return response.json({
    evento: "OmniStack 11",
    aluno: "Me",
    params: params,
    id: id
  });
});

routes.get("/users", (request, response) => {
  const params = request.query;
  //response.send("uepa");
  return response.json({
    evento: "OmniStack 11",
    aluno: "Me",
    params: params
  });
});

routes.post("/users", (request, response) => {
  const data = request.body;
  //response.send("uepa");
  return response.json({
    dataSent: data
  });
});

module.exports = routes;
