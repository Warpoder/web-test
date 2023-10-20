const express = require('express');
const app = express();
const port = 5674;

app.get('/', (req, res) => {
  res.sendfile(__dirname + '/index.html');
});

app.listen(port, (port) => {
  console.log(`Example app listening at http://localhost:${port}`);
});