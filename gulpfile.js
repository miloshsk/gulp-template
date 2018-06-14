'use strict'

global.$ = {
	gulp: require('gulp'),
	sass: require('gulp-sass'),
	autoprefixer: require('gulp-autoprefixer'),
	concat: require('concat'),
	notify: require("gulp-notify"),
	sourcemaps: require('gulp-sourcemaps'),
	browserSync: require('browser-sync').create(),

	path: {
		tasks: require('./gulp/config/tasks.js')
	}
};

$.path.tasks.forEach(function(taskPath) {
	require(taskPath)();
});

$.gulp.task('default',$.gulp.series(
	$.gulp.parallel('templates','sass','scripts'),
	$.gulp.parallel('watch', 'serve'),
	'watch',
	'serve'
	));
