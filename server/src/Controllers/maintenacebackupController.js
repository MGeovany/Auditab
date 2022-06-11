const Model = require("../Models/maintenacebackupModel");

function create(req, res) {
  const maintenace = new Model({
    description: req.body.description,
    date: req.body.date,
  });
  maintenace.save(function (error, maintenace) {
    if (error) {
      res.status(500).send("No se ha podido agregar.");
    } else {
      res.status(200).json(maintenace); //envía al cliente el id generado
    }
  });
}

function update(req, res) {
  Model.findById(req.params.id, function (err, maintenace) {
    if (err) res.status(500).send("Error en la base de datos");
    else {
      if (maintenace != null) {
        maintenace.description= req.body.description;
        maintenace.date= req.body.date;

        maintenace.save(function (error, maintenace1) {
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
 Model.find((err, maintenace) => {
    if (err) res.status(500).send("Error en la base de datos1");
    else res.status(200).json(maintenace);
  });
}

function getbyName(req, res) {
  Model.find(
    { description: req.query.description },
    function (err, maintenace) {
      if (err) res.status(500).send("Error en la base de datos6 ");
      else {
        if (maintenace != null) {
          res.status(200).json(maintenace);
        } else res.status(404).send("No se encontro la base de datos");
      }
    }
  );
}

function getbyID(req, res) {
  Model.findById(req.params.id, function (err, maintenace) {
    if (err) res.status(500).send("Error en la base de datos4 ");
    else {
      if (maintenace != null) {
        res.status(200).json(maintenace);
      } else res.status(404).send("No se encontro esa cancion");
    }
  });
}

function _delete(req, res) {
  Model.findById(req.params.id, function (err, maintenace) {
    if (err) res.status(500).send("Error en la base de datos");
    else {
      if (maintenace != null) {
        maintenace.remove(function (error, result) {
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