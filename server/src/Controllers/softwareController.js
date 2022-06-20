const Model = require('../Models/softwareModel')

function create(req, res) {
  const software = new Model({
    description: req.body.description,
    dateAdded: req.body.dateAdded,
    dateExpiration: req.body.dateExpiration,
    price: req.body.price
  })
  software.save(function (error, software) {
    if (error) {
      res.status(500).send('No se ha podido agregar.')
    } else {
      res.status(200).json(software)
    }
  })
}

function update(req, res) {
  Model.findById(req.params.id, function (err, software) {
    if (err) res.status(500).send('Error en la base de datos')
    else {
      if (software != null) {
        software.description = req.body.description
        software.dateAdded = req.body.dateAdded
        software.dateExpiration = req.body.dateExpiration
        software.price = req.body.price
        software.save(function (error, software1) {
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
  Model.find((err, software) => {
    if (err) res.status(500).send('Error en la base de datos1')
    else res.status(200).json(software)
  })
}

function getbyName(req, res) {
  Model.find({ description: req.query.description }, function (err, software) {
    if (err) res.status(500).send('Error en la base de datos6 ')
    else {
      if (software != null) {
        res.status(200).json(software)
      } else res.status(404).send('No se encontro la base de datos')
    }
  })
}

function getbyID(req, res) {
  Model.findById(req.params.id, function (err, software) {
    if (err) res.status(500).send('Error en la base de datos4 ')
    else {
      if (software != null) {
        res.status(200).json(software)
      } else res.status(404).send('No se encontro esa cancion')
    }
  })
}

function _delete(req, res) {
  Model.findById(req.params.id, function (err, software) {
    if (err) res.status(500).send('Error en la base de datos')
    else {
      if (software != null) {
        software.remove(function (error, result) {
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
