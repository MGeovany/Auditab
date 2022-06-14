const express = require('express')
var app = express()
var cors = require('cors')

var mongoose = require('mongoose')
const bodyParser = require('body-parser')

// Routes
const databaseRoute = require('./Routes/databaseRoute')
const furnitureRoute = require('./Routes/furnitureequipmentRoute')
const consumableRoute = require('./Routes/generalconsumableRoute')
const hardwareRoute = require('./Routes/hardwareRoute')
const jobRoute = require('./Routes/jobpositionRoute')
const maintenaceRoute = require('./Routes/maintenacebackupRoute')
const projectRoute = require('./Routes/projectRoute')
const softwareRoute = require('./Routes/softwareRoute')

PORT = process.env.PORT || 5000
app.use(cors())

app.listen(PORT, () => console.log('App escuchando en el puerto', PORT))

mongoose
  .connect(
    'mongodb+srv://George:vFyxnj0oMZQA212U@jorgetests.gmaz5.mongodb.net/AuditAppDataBase?retryWrites=true&w=majority'
  )
  .catch(error => handleError(error))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(
  '/auditab',
  databaseRoute,
  furnitureRoute,
  consumableRoute,
  hardwareRoute,
  jobRoute,
  maintenaceRoute,
  projectRoute,
  softwareRoute
)

app.get('/', function (req, res) {
  res.send('inicio de aplicacion')
})
