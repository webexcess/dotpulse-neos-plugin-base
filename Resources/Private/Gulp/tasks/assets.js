function assets() {
	return gulp.src(config.assets.source)
		.pipe(gplumber({errorHandler: config.handleErrors}))
		.pipe(gflatten())
		.pipe(gchmod(644))
		.pipe(gulp.dest(config.assets.destination))
		.pipe(gsize({
			title: 'Assets: '
		}));
}
assets.description = 'Copy fonts and images to the public assets folder';
gulp.task(assets);
