const Model = require("../Models/jobpositionModel");

function create(req, res) {
  const job = new Model({
    description: req.body.description,
    accessLevel: req.body.accessLevel,
  });
  job.save(function (error, job) {
    if (error) {
      res.status(500).send("No se ha podido agregar.");
    } else {
      res.status(200).json(job); //envía al cliente el id generado
    }
  });
}

function update(req, res) {
  Model.findById(req.params.id, function (err, job) {
    if (err) res.status(500).send("Error en la base de datos");
    else {
      if (job != null) {
        job.description= req.body.description;
        job.accessLevel= req.body.accessLevel;

        job.save(function (error, job1) {
          if (error) res.status(500).send("Error en la base de datos");
          else {
            res.status(200).send("Modificado exitosamente");
          }
        });
      } else res.status(404).send("No se encontro esa persona");
    }
  });
}

function getAll(req, res) {
 Model.find((err, job) => {
    if (err) res.status(500).send("Error en la base de datos1");
    else res.status(200).json(job);
  });
}

function getbyName(req, res) {
  Model.find(
    { description: req.query.description },
    function (err, job) {
      if (err) res.status(500).send("Error en la base de datos6 ");
      else {
        if (job != null) {
          res.status(200).json(job);
        } else res.status(404).send("No se encontro la base de datos");
      }
    }
  );
}

function getbyID(req, res) {
  Model.findById(req.params.id, function (err, job) {
    if (err) res.status(500).send("Error en la base de datos4 ");
    else {
      if (job != null) {
        res.status(200).json(job);
      } else res.status(404).send("No se encontro esa cancion");
    }
  });
}

function _delete(req, res) {
  Model.findById(req.params.id, function (err, job) {
    if (err) res.status(500).send("Error en la base de datos");
    else {
      if (job != null) {
        job.remove(function (error, result) {
          if (error) res.status(500).send("Error en la base de datos");
          else {
            res.status(200).send("Eliminado exitosamente");
          }
        });
      } else res.status(404).send("No se encontro la base de datos");
    }
  });
}

module.exports = {
  create,
  update,
  getAll,
  getbyName,
  getbyID,
  _delete,
};