const Model = require('../Models/projectsModel')

function create(req, res) {
  const project = new Model({
    description: req.body.description,
    startDate: req.body.startDate,
    endDate: req.body.endDate
  })
  project.save(function (error, project) {
    if (error) {
      res.status(500).send('No se ha podido agregar.')
    } else {
      res.status(200).json(project) //envía al cliente el id generado
    }
  })
}

function update(req, res) {
  Model.findById(req.params.id, function (err, project) {
    if (err) res.status(500).send('Error en la base de datos')
    else {
      if (project != null) {
        project.description = req.body.description
        project.startDate = req.body.startDate
        project.endDate = req.body.endDate

        project.save(function (error, project1) {
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
  Model.find((err, project) => {
    if (err) res.status(500).send('Error en la base de datos1')
    else res.status(200).json(project)
  })
}

function getbyName(req, res) {
  Model.find({ description: req.query.description }, function (err, project) {
    if (err) res.status(500).send('Error en la base de datos6 ')
    else {
      if (project != null) {
        res.status(200).json(project)
      } else res.status(404).send('No se encontro la base de datos')
    }
  })
}

function getbyID(req, res) {
  Model.findById(req.params.id, function (err, project) {
    if (err) res.status(500).send('Error en la base de datos4 ')
    else {
      if (project != null) {
        res.status(200).json(project)
      } else res.status(404).send('No se encontro esa cancion')
    }
  })
}

function _delete(req, res) {
  Model.findById(req.params.id, function (err, project) {
    if (err) res.status(500).send('Error en la base de datos')
    else {
      if (project != null) {
        project.remove(function (error, result) {
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
