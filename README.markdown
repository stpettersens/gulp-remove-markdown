### gulp-remove-markdown
> Gulp plug-in to remove Markdown from a file (via [remove-markdown](https://github.com/stiang/remove-markdown)).

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

* *ext*: File extension to use for Markdown stripped output.
* *options*: Options [supported by remove-markdown](http://bit.ly/1LrOKG4).

##### Attribution

* This plug-in is based on the structure of [gulp-markdown](https://github.com/sindresorhus/gulp-markdown) by Sindre Sorhus.
* This plug-in uses [remove-markdown](https://github.com/stiang/remove-markdown) by Stian Grytøyr.
