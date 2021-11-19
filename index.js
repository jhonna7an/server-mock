const express = require("express");
const app = express();
const dataJson = require("./json/mock.json")
const lisy = require("./json/lisy.json")
const installedBase = require("./json/baseInstalled.json")
const damage = require("./json/damage.json")
const dtb_movil = require("./json/dtb-movil.json")

app.post("/dtb-movil", function (req, res) {
  res.status(200).json(dtb_movil);
});

app.get("/damage", function (req, res) {
  res.status(200).json(damage);
});

app.get("/installedBase", function (req, res) {
  res.status(200).json(installedBase);
});

app.get("/lisy", function (req, res) {
  res.status(200).json(lisy);
});

app.get("/mock", function (req, res) {
  res.status(404).json(dataJson);
});

app.get("/", function (req, res) {
  respuesta = {
    error: true,
    codigo: 200,
    mensaje: "Punto de inicio",
  };
  res.send(respuesta);
});

app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});
