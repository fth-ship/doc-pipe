// file: tests/index.test.js - created at 2014-11-25, 05:01
var should = require('should');
var docPipe = require('../');

describe('Doc pipe', function () {
  it('should be strip line breaks', function () {
    var actual = docPipe.stripLines(
      '// test\n' +
      'console.log("Hello");'
    );
    var expected = [
      '// test',
      'console.log("Hello");'
    ];

    actual.should.be.eql(expected);
  });

  it('should be return comments', function () {
    var actual = docPipe.getComments(
      '// test\n' +
      '/*\n' +
      '* another test\n' +
      '*/\n' + 
      'console.log("Hello")'
    );
    var expected = [
      '// test',
      '/*',
      '* another test',
      '*/'
    ];

    actual.should.be.eql(expected);
  });

  it('should be strip comments markup', function () {
    var actual = docPipe.stripCommentsMarkup(
      '// test\n' +
      '/*\n' +
      '* another test\n' +
      '*/\n' + 
      'console.log("Hello")'
    );
    var expected = [
      ' test',
      ' another test',
    ];

    actual.should.be.eql(expected);
  });
});
