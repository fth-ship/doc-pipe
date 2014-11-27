// file: modules/strip-comments-markup.js - created at 2014-11-26, 10:49
function stripCommentsMarkupHandler(input) {
  // start here with strip-comments-markup.js
  var out = [];
  var getComments = require('./get-comments');

  out = getComments(input); 
  function mapCommentsHandler(line) {
    if (line.indexOf('//') > -1) {
      line = line.replace('//', '');
    } else if (line.indexOf('/*', '') > -1) {
      line = line.replace('/*', '');
    } else if (line.indexOf('*/') > -1) {
      line = line.replace('*/', '');
    } else if (line.indexOf('*') > -1) {
      line = line.replace('*', '');
    }
    return line;
  }
  out = out.map(mapCommentsHandler);
  function filterCommentsHandler(line) {
    if (line) return line;
  }
  out = out.filter(filterCommentsHandler);

  return out;
}
module.exports = exports = stripCommentsMarkupHandler;
