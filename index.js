
var express = require('express');
var serveStatic = require("serve-static");

var app = express();
console.log(process.env.CATALOG_HOST);
app.use(serveStatic(__dirname + "/."));

//Server listening port.
app.listen(3000);
console.log('Server running on http://0.0.0.0:3000/');
