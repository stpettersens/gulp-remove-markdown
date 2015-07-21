### gulp-remove-markdown
> Gulp plug in to remove Markdown from a file (via [remove-markdown](https://github.com/stiang/remove-markdown)). 

Install:

    $ npm install --save-dev gulp-markdown

Usage:
```js
var gulp = require('gulp'),
removeMarkdown = require('gulp-remove-markdown');

gulp.task('default', function () {
	return gulp.src('README.markdown')
		.pipe(removeMarkdown())
		.pipe(gulp.dest('dist'));
});
