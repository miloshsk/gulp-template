'use strict'

global.$ = {
	gulp: require('gulp'),
	sass: require('gulp-sass'),
	autoprefixer: require('gulp-autoprefixer'),
	concat: require('concat'),
	notify: require('gulp-notify'),
	svgmin: require('gulp-svgmin'),
	cheerio: require('gulp-cheerio'),
	replace: require('gulp-replace'),
	svgSprite: require('gulp-svg-sprite'),
	tinypng: require('gulp-tinypng'),
	sourcemaps: require('gulp-sourcemaps'),
	browserSync: require('browser-sync').create(),

	path: {
		tasks: require('./gulp/config/tasks.js')
	}
};

$.path.tasks.forEach(function(taskPath) {
	require(taskPath)();
});
$.gulp.task('build', $.gulp.series(
	$.gulp.parallel('templates','sass','scripts','fonts','img:dev'),
	$.gulp.parallel('watch', 'serve'),
	'watch',
	'serve'
	));
$.gulp.task('default',$.gulp.series(
	$.gulp.parallel('templates','sass','scripts','fonts','img:build'),
	$.gulp.parallel('watch', 'serve'),
	'watch',
	'serve'
	));