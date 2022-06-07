const express = require("express");
var app = express();
var mongoose = require('mongoose');
const bodyParser = require("body-parser");
var path = require('path');

app.listen(3000, () => console.log("App escuchando en el puerto 3000!"));

mongoose
  .connect(
    "mongodb+srv://George:vFyxnj0oMZQA212U@jorgetests.gmaz5.mongodb.net/AuditAppDataBase?retryWrites=true&w=majority"
  )
  .catch((error) => handleError(error));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use('/auditab',);

app.get('/', function (req, res) {
  res.send("inicio de aplicacion");
});