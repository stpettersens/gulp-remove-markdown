'use strict';
var gutil = require('gulp-util'),
  through = require('through2');

var removeMarkdown = require('remove-markdown');

module.exports = function(ext) {
  return through.obj(function(file, enc, cb) {
    if(file.isNull()) {
      cb(null, file);
      return;
    }

    if(file.isStream()) {
      cb(new gutil.PluginError('gulp-remove-markdown', 'Streaming not supported'));
      return;
    }

    removeMarkdown(file.contents.toString(), function(err, data) {
      if(err) {
        cb(new gutil.PluginError('gulp-remove-markdown', err, {fileName: file.path}));
        return;
      }

      file.contents = new Buffer(data);
      if(ext == null) ext = '.txt';
      file.path = gutil.replaceExtension(file.path, ext);

      cb(null, file);
    });
  });
};
