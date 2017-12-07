const express = require('express');
const port = process.env.PORT;

var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(port);
