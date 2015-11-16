### gulp-remove-markdown
> :tropical_drink: Gulp plug-in to remove Markdown from a file (via [remove-markdown](https://github.com/stiang/remove-markdown)).

[![Build Status](https://travis-ci.org/stpettersens/gulp-remove-markdown.png?branch=master)](https://travis-ci.org/stpettersens/gulp-remove-markdown)
[![npm version](https://badge.fury.io/js/gulp-remove-markdown.svg)](http://npmjs.com/package/gulp-remove-markdown)
[![Dependency Status](https://david-dm.org/stpettersens/gulp-remove-markdown.png?theme=shields.io)](https://david-dm.org/stpettersens/gulp-remove-markdown) [![Development Dependency Status](https://david-dm.org/stpettersens/gulp-remove-markdown/dev-status.png?theme=shields.io)](https://david-dm.org/stpettersens/gulp-remove-markdown#info=devDependencies)

##### Install:

    $ npm install --save-dev gulp-remove-markdown

##### Usage:
```js
var gulp = require('gulp'),
removeMarkdown = require('gulp-remove-markdown');

gulp.task('default', function () {
	return gulp.src('README.markdown')
	.pipe(removeMarkdown()) // removeMarkdown(ext, options)
	.pipe(gulp.dest('dist'));
});
```

##### Options

* **ext: string** : File extension to use for Markdown stripped output.
* **options: Object** : Options [supported by remove-markdown](http://bit.ly/1LrOKG4).

##### Attribution

* This plug-in is based on the structure of [gulp-markdown](https://github.com/sindresorhus/gulp-markdown) by Sindre Sorhus.
* This plug-in uses [remove-markdown](https://github.com/stiang/remove-markdown) by Stian Grytøyr.
