module.exports = function() {
	$.gulp.task('watch', function() {
		$.gulp.watch('src/sass/**/*.sass',$.gulp.series('sass'));
		$.gulp.watch('src/html/**/*.html',$.gulp.series('templates'));
		$.gulp.watch('src/js/main.js',$.gulp.series('scripts'));
		$.gulp.watch('src/img/*',$.gulp.series('img:dev'));
});
}