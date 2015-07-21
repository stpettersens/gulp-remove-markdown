'use strict';
var assert = require('assert'),
     gutil = require('gulp-util');

var removeMarkdown = require('./');

it('should strip Markdown out of a file', function(cb) {
  var stream = removeMarkdown();

  stream.once('data', function(file) {
    assert.equal(file.relative, 'test.markdown');
    assert.equal(file.contents.toString(), 'foo');
  });

  stream.on('end', cb);

  stream.write(new gutil.File({
    path: 'test.markdown',
    contents: new Buffer('### foo')
  }));

  stream.end();
});
