module.exports = function() {
	$.gulp.task('sass', function() {
	return $.gulp.src('src/sass/main.sass')
		.pipe($.sourcemaps.init())
		.pipe($.sass({
			'include css': true
		}))
		.pipe($.autoprefixer({
            browsers: ['last 4 versions']
        }))
        .on("error", $.notify.onError({
	        title: "stile"
	    }))
	   	.pipe($.sourcemaps.write())
		.pipe($.gulp.dest('build/css'))
		.pipe($.browserSync.reload({
			stream:true
		}));
});
}