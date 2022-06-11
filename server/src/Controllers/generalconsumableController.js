const consumableModel = require("../Models/generalconsumableModel");

function createConsumable(req, res) {
  const consumable = new consumableModel({
    price: req.body.price,
    description: req.body.description,
  });
  consumable.save(function (error, consumable) {
    if (error) {
      res.status(500).send("No se ha podido agregar.");
    } else {
      res.status(200).json(consumable); //envía al cliente el id generado
    }
  });
}

function updateConsumable(req, res) {
    consumableModel.findById(req.params.id, function (err, consumable) {
    if (err) res.status(500).send("Error en la base de datos");
    else {
      if (consumable != null) {
        consumable.price = req.body.price;
        consumable.description = req.body.description;

        consumable.save(function (error, consumable1) {
          if (error) res.status(500).send("Error en la base de datos");
          else {
            res.status(200).send("Modificado exitosamente");
          }
        });
      } else res.status(404).send("No se encontro esa persona");
    }
  });
}

function allConsumable(req, res) {
    consumableModel.find((err, consumable) => {
    if (err) res.status(500).send("Error en la base de datos1");
    else res.status(200).json(consumable);
  });
}

function nameConsumable(req, res) {
    consumableModel.find(
    { description: req.query.description },
    function (err, consumable) {
      if (err) res.status(500).send("Error en la base de datos6 ");
      else {
        if (consumable != null) {
          res.status(200).json(consumable);
        } else res.status(404).send("No se encontro la base de datos");
      }
    }
  );
}

function consumablebyID(req, res) {
    consumableModel.findById(req.params.id, function (err, consumable) {
    if (err) res.status(500).send("Error en la base de datos4 ");
    else {
      if (consumable != null) {
        res.status(200).json(consumable);
      } else res.status(404).send("No se encontro esa cancion");
    }
  });
}

function deleteConsumable(req, res) {
    consumableModel.findById(req.params.id, function (err, consumable) {
    if (err) res.status(500).send("Error en la base de datos");
    else {
      if (consumable != null) {
        consumable.remove(function (error, result) {
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
  createConsumable,
  updateConsumable,
  allConsumable,
  nameConsumable,
  consumablebyID,
  deleteConsumable,
};
