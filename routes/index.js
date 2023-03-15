var express = require("express");
var app = express();

var ether = require("./ether");

app.use("/ether",ether)

module.exports = app;