/*
Test gulp-remove-markdown.
*/
'use strict';
var assert = require('assert'),
      gulp = require('gulp'),
  gulpfile = require('./Gulpfile.js'),
     gutil = require('gulp-util');

var removeMarkdown = require('./');

describe('Test gulp-remove-markdown plug-in', function() {
  it('Should strip Markdown out of a file (stream)', function(done) {
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

  it('Should strip Markdown out of a file (gulp)', function(done) {
    if(gulp.tasks.readme) gulp.start();
    if(gulp.tasks.log) gulp.start();
    done();
  });
});
