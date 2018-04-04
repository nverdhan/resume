const express = require('express');
const app = express();
const path = require('path');

// app.use(function (req, res, next) {
//   res.setHeader('Cache-Control', 'public, max-age=2592000'); // 1 year
//   next();
// });

app.use('/assets', express.static(path.join(__dirname, 'assets')));
console.log(path.join(__dirname, 'assets/'));

app.get('/', function (req, res) {
  res.sendFile('index.html', {root: __dirname});
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Naisheel's resume app listening on port ${port}`);
});
