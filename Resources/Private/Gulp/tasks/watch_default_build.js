// jscs:disable maximumLineLength
// Build
build = gulp.series('clean', gulp.parallel('assets','scssRender'), gulp.parallel('jsRender','jsHint','cssRender'));
build.description = gutil.colors.inverse(' Generates all ') + ' Assets, Javascript and CSS files';
build.flags = config.flagNotice.css;
gulp.task('build', build);

// Watch
function watch(callback) {
	gulp.watch(config.watch.styles, gulp.series('css')).on('change', gcache.update('css'));
	gulp.watch(config.watch.scripts, gulp.series('js')).on('change', gcache.update('js'));
	bconsole.log(gutil.colors.dim('\n\n   Watching source files for changes\n\n'));
}
watch.description = 'Watch over all files and regenerates them';
watch.flags = config.flagNotice.css;
gulp.task(watch);

// Default Task
defaultTask = gulp.series('build', 'watch');
defaultTask.description = gutil.colors.inverse(' Generates all ') + ' Assets, Javascript and CSS files & ' + gutil.colors.inverse(' watch them ');
defaultTask.flags = config.flags;
gulp.task('default', defaultTask);
