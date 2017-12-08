const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

app.use(express.static(path.join(__dirname + 'public')));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public/home.html'));
});

app.get('/angular', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular.html'));
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`app fired up on port ${port}`);
});
