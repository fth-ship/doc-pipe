# Doc Pipe

# Installation

  `[sudo] npm i doc-pipe`

# Usage

  ```
  var docPipe = require('doc-pipe');
  var fs = require('fs');
  var file = fs.createReadStream('./path/to/file.js');

  file
    .pipe(docPipe)
    .pipe(process.stdout);
  ```
  
  or to use the api

  ```
  var docPipe = require('doc-pipe/modules');
  ```

  see examples/example.js
