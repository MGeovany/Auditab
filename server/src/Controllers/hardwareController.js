const Model = require('../Models/hardwareModel')

function create(req, res) {
  const hardware = new Model({
    serial_number: req.body.serial_number,
    description: req.body.description,
    model: req.body.model,
    price: req.body.price,
    buyDate: req.body.buyDate
  })
  hardware.save(function (error, hardware) {
    if (error) {
      res.status(500).send('No se ha podido agregar.')
    } else {
      res.status(200).json(hardware)
    }
  })
}

function update(req, res) {
  Model.findById(req.params.id, function (err, hardware) {
    if (err) res.status(500).send('Error en la base de datos')
    else {
      if (hardware != null) {
        hardware.serial_number = req.body.serial_number
        hardware.description = req.body.description
        hardware.model = req.body.model
        hardware.price = req.body.price
        hardware.buyDate = req.body.buyDate
        hardware.save(function (error, hardware1) {
          if (error) res.status(500).send('Error en la base de datos')
          else {
            res.status(200).send('Modificado exitosamente')
          }
        })
      } else res.status(404).send('No se encontro esa persona')
    }
  })
}

function getAll(req, res) {
  Model.find((err, hardware) => {
    if (err) res.status(500).send('Error en la base de datos1')
    else res.status(200).json(hardware)
  })
}

function getbyName(req, res) {
  Model.find({ description: req.query.description }, function (err, hardware) {
    if (err) res.status(500).send('Error en la base de datos6 ')
    else {
      if (hardware != null) {
        res.status(200).json(hardware)
      } else res.status(404).send('No se encontro la base de datos')
    }
  })
}

function getbyID(req, res) {
  Model.findById(req.params.id, function (err, hardware) {
    if (err) res.status(500).send('Error en la base de datos4 ')
    else {
      if (hardware != null) {
        res.status(200).json(hardware)
      } else res.status(404).send('No se encontro esa cancion')
    }
  })
}

function _delete(req, res) {
  Model.findById(req.params.id, function (err, hardware) {
    if (err) res.status(500).send('Error en la base de datos')
    else {
      if (hardware != null) {
        hardware.remove(function (error, result) {
          if (error) res.status(500).send('Error en la base de datos')
          else {
            res.status(200).send('Eliminado exitosamente')
          }
        })
      } else res.status(404).send('No se encontro la base de datos')
    }
  })
}

module.exports = {
  create,
  update,
  getAll,
  getbyName,
  getbyID,
  _delete
}
