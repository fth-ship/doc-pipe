var docPipe = require('./');
var fs = require('fs');
var file = fs.createReadStream('./tests/case/test.js');

file
  .pipe(docPipe.stream())
  .pipe(process.stdout);
