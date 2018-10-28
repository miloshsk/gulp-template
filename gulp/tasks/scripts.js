module.exports = function() {
		$.gulp.task('scripts', function() {
			return $.gulp.src('src/js/*.js')
				.pipe($.concat('script.js'))
				.pipe($.babel({
					presets: ['@babel/env']
				}))
				.pipe($.uglify({
					toplevel: true
				}))
				.pipe($.gulp.dest('build/js'))
				.pipe($.browserSync.reload({
						stream:true
				}));
		});
}