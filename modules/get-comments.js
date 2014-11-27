// file: modules/get-comments.js - created at 2014-11-26, 10:36
function getCommentsHandler(input) {
  // start here with get-comments.js
  var out = [];
  var stripLines = require('./strip-lines');
  
  out = stripLines(input); 
  function filterCommentsHandler(line) {
    if (line.indexOf('//') > -1) return line;
    if (line.indexOf('/*') > -1) return line;
    if (line.indexOf('*') > -1) return line;
    if (line.indexOf('*/') > -1) return line; 
  }
  out = out.filter(filterCommentsHandler);

  return out;
}
module.exports = exports = getCommentsHandler;
