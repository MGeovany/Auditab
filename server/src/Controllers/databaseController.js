const databaseModel = require('../Models/databaseModel')

function createDataBase(req, res) {
  const database = new databaseModel({
    dateBackedUp: req.body.dateBackedUp,
    description: req.body.description
  })
  database.save(function (error, database) {
    if (error) {
      res.status(500).send('No se ha podido agregar.')
    } else {
      res.status(200).json(database) //envía al cliente el id generado
    }
  })
}

function updateDataBase(req, res) {
  databaseModel.findById(req.params.id, function (err, database) {
    if (err) res.status(500).send('Error en la base de datos')
    else {
      if (database != null) {
        database.dateBackedUp = req.body.dateBackedUp
        database.description = req.body.description

        database.save(function (error, database1) {
          if (error) res.status(500).send('Error en la base de datos')
          else {
            res.status(200).send('Modificado exitosamente')
          }
        })
      } else res.status(404).send('No se encontro esa persona')
    }
  })
}

function allDataBase(req, res) {
  databaseModel.find((err, database) => {
    if (err) res.status(500).send('Error en la base de datos1')
    else res.status(200).json(database)
  })
}

function nameDataBase(req, res) {
  databaseModel.find(
    { description: req.query.description },
    function (err, database) {
      if (err) res.status(500).send('Error en la base de datos6 ')
      else {
        if (database != null) {
          res.status(200).json(database)
        } else res.status(404).send('No se encontro la base de datos')
      }
    }
  )
}

function databasebyID(req, res) {
  databaseModel.findById(req.params.id, function (err, database) {
    if (err) res.status(500).send('Error en la base de datos4 ')
    else {
      if (database != null) {
        res.status(200).json(database)
      } else res.status(404).send('No se encontro esa cancion')
    }
  })
}

function databaseDelete(req, res) {
  databaseModel.findById(req.params.id, function (err, database) {
    if (err) res.status(500).send('Error en la base de datos')
    else {
      if (database != null) {
        database.remove(function (error, result) {
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
  createDataBase,
  updateDataBase,
  allDataBase,
  nameDataBase,
  databasebyID,
  databaseDelete
}
