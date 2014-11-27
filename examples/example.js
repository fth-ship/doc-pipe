var fs = require('fs');
var path = require('path');
var file = fs.createReadStream(path.resolve(__dirname, '../tests/case/test.js'));
var docPipe = require('../');

file
  .pipe(docPipe)
  .pipe(process.stdout);
