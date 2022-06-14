const furnitureequipmentModel = require("../Models/furnitureequipmentModel");

function createFurniture(req, res) {
  const furniture = new furnitureequipmentModel({
    serialNumber: req.body.serialNumber,
    description: req.body.description,
  });
  furniture.save(function (error, furniture) {
    if (error) {
      res.status(500).send("No se ha podido agregar.");
    } else {
      res.status(200).json(furniture); //envía al cliente el id generado
    }
  });
}

function updateFurniture(req, res) {
  furnitureequipmentModel.findById(req.params.id, function (err, furniture) {
    if (err) res.status(500).send("Error en la base de datos");
    else {
      if (furniture != null) {
        furniture.serialNumber = req.body.serialNumber;
        furniture.description = req.body.description;

        furniture.save(function (error, furniture1) {
          if (error) res.status(500).send("Error en la base de datos");
          else {
            res.status(200).send("Modificado exitosamente");
          }
        });
      } else res.status(404).send("No se encontro esa persona");
    }
  });
}

function allFurniture(req, res) {
  furnitureequipmentModel.find((err, furniture) => {
    if (err) res.status(500).send("Error en la base de datos1");
    else res.status(200).json(furniture);
  });
}

function serialFurniture(req, res) {
  furnitureequipmentModel.find(
    { serialNumber: req.query.serialNumber },
    function (err, furniture) {
      if (err) res.status(500).send("Error en la base de datos6 ");
      else {
        if (furniture != null) {
          res.status(200).json(furniture);
        } else res.status(404).send("No se encontro la base de datos");
      }
    }
  );
}

function furniturebyID(req, res) {
  furnitureequipmentModel.findById(req.params.id, function (err, furniture) {
    if (err) res.status(500).send("Error en la base de datos4 ");
    else {
      if (furniture != null) {
        res.status(200).json(furniture);
      } else res.status(404).send("No se encontro esa cancion");
    }
  });
}

function deleteFurniture(req, res) {
  furnitureequipmentModel.findById(req.params.id, function (err, furniture) {
    if (err) res.status(500).send("Error en la base de datos");
    else {
      if (furniture != null) {
        furniture.remove(function (error, result) {
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
  createFurniture,
  updateFurniture,
  allFurniture,
  serialFurniture,
  furniturebyID,
  deleteFurniture,
};
