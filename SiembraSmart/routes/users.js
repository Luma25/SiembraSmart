var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "siembraSmart"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Conectado a la Base de Datos!");
  
  var sql = "INSERT INTO localidades (localizationID, region, ciudad, longitud_mapa, latitud_mapa) VALUES (000, 'Metropolitana', Santiago, -33.462805, -70.660001)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 localidad insertada");
  });
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
