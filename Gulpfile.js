/*
Test gulp-remove-markdown plug-in in a Gulp file,
this file is also used to generate this project's readme.txt
for the npm package.
*/
var gulp = require('gulp'),
 replace = require('gulp-replace'),
      fs = require('fs');

var removeMarkdown = require('./');

var readme = 'README';
var md = '.markdown';
var txt = '.txt';
var log = '.log';

gulp.task('readme', function() {
  return gulp.src(readme + md)
  .pipe(removeMarkdown())
  .pipe(replace(/\`js/g, ''))
  .pipe(replace(/\`/g, ''))
  .pipe(gulp.dest('.'))
});

gulp.task('log', function() {
  return gulp.src(readme + md)
  .pipe(removeMarkdown(log, {stripListLeaders: false}))
  .pipe(replace(/\`js/g, ''))
  .pipe(replace(/\`/g, ''))
  .pipe(gulp.dest('.'));
});

gulp.task('clean', function() {
  if(fs.existsSync(readme + txt))
    fs.unlinkSync('README.txt');
  if(fs.existsSync(readme + log))
    fs.unlinkSync('README.log');
});

gulp.task('default', ['readme'], function(){});
