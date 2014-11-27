// file: modules/stream.js - created at 2014-11-26, 11:02
function streamHandler() {
  var stream = require('stream');
  var comments = stream.Transform({ objectMode: true });
  var stripCommentsMarkup = require('./strip-comments-markup');

  function _transformHandler(chunk, enc, done) {
    var input = chunk.toString();
    var out = stripCommentsMarkup(input);
    out = JSON.stringify(out);
    out = new Buffer(out);
    done(null, out); 
  }
  comments._transform = _transformHandler;

  return comments;
}
module.exports = exports = streamHandler;
