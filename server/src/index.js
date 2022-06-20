const express = require('express')
var app = express()
var cors = require('cors')
require('dotenv').config()

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
const networkRoute = require('./Routes/networkRoute')

const PORT = process.env.PORT || 4000
const url = process.env.MONGODB_URI

app.use(
  cors({
    origin: '*'
  })
)

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log('Server up and running! on PORT:' + PORT)
    )
  )

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
  softwareRoute,
  networkRoute
)

app.get('/', function (req, res) {
  res.send('inicio de aplicacion')
})
