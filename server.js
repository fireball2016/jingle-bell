const express = require('express');
const port = process.env.PORT;

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('fuck.html')
});

app.use(express.static(__dirname + '/angular-files'));

app.get('/angular-files', function (req, res) {
  res.render('index.html')
});



app.listen(port);
