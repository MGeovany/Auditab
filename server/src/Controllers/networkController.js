const Model = require('../Models/networkModel')

function create(req, res) {
  const network = new Model({
    type: req.body.type,
    description: req.body.description,
    price: req.body.price
  })
  network.save(function (error, network) {
    if (error) {
      res.status(500).send('No se ha podido agregar.')
    } else {
      res.status(200).json(network) //envía al cliente el id generado
    }
  })
}

function update(req, res) {
  Model.findById(req.params.id, function (err, network) {
    if (err) res.status(500).send('Error en la base de datos')
    else {
      if (network != null) {
        network.type = req.body.type
        network.description = req.body.description
        network.price = req.body.price

        network.save(function (error, network1) {
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
  Model.find((err, network) => {
    if (err) res.status(500).send('Error en la base de datos1')
    else res.status(200).json(network)
  })
}

function getbyName(req, res) {
  Model.find({ description: req.query.description }, function (err, network) {
    if (err) res.status(500).send('Error en la base de datos6 ')
    else {
      if (network != null) {
        res.status(200).json(network)
      } else res.status(404).send('No se encontro la base de datos')
    }
  })
}

function getbyID(req, res) {
  Model.findById(req.params.id, function (err, network) {
    if (err) res.status(500).send('Error en la base de datos4 ')
    else {
      if (network != null) {
        res.status(200).json(network)
      } else res.status(404).send('No se encontro esa cancion')
    }
  })
}

function _delete(req, res) {
  Model.findById(req.params.id, function (err, network) {
    if (err) res.status(500).send('Error en la base de datos')
    else {
      if (network != null) {
        network.remove(function (error, result) {
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
