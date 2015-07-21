'use strict';
var assert = require('assert'),
     gutil = require('gulp-util');

var removeMarkdown = require('./');

describe('Test gulp-remove-markdown plug-in', function() {
  it('Should strip Markdown out of a file', function(done) {
    var stream = removeMarkdown();

    stream.once('data', function(file) {
      assert.equal(file.relative, 'test.txt');
      assert.equal(file.contents.toString(), 'foo');
    });

    stream.on('end', done);

    stream.write(new gutil.File({
      path: 'test.markdown',
      contents: new Buffer('### foo')
    }));

    stream.end();
  });

  it('Should throw an Error when file isn\'t specified', function(done) {
    var stream = removeMarkdown();

    stream.once('data', function(file) {
      assert.equal(file, null);
    });

    stream.on('end', done);

    stream.write(null);
    stream.end();
  });
});
