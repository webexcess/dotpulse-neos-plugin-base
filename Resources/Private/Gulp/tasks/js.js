var ginclude = require('gulp-include');
var gjshint  = require('gulp-jshint');
var guglify  = require('gulp-uglify');

// var path = require('path');
// var includePathsArray = [];
// for (var i = 0; i < config.scripts.includePaths.length; i++) {
// 	includePathsArray.push(path.resolve('./') + config.scripts.includePaths[i]);
// }

// Hint Javscript
function jsHint() {
	return gulp.src(config.watch.scripts, {since: gulp.lastRun('jsHint')})
		.pipe(gjshint())
		.pipe(gjshint.reporter('jshint-stylish', { verbose: true }))
		.pipe(gcache('js'));
}
jsHint.description = 'Helps to detect errors and potential problems in code';
gulp.task(jsHint);

// Render Javscript
function jsRender() {
	return gulp.src(config.scripts.source)
		.pipe(gplumber({
			errorHandler: config.handleErrors
		}))
		.pipe(mode.maps ? gmaps.init({loadMaps: true}) : gutil.noop())
		.pipe(ginclude({
			extensions: ['js']
		}))
		.pipe(gflatten())
		.pipe(mode.minimize ? guglify(config.scripts.uglifyOptions) : gutil.noop())
		.pipe(gheader(config.banner, {
			info: settings,
			timestamp: config.timestamp()
		}))
		.pipe(gchmod(644))
		.pipe(mode.maps ? gmaps.write(config.maps.relativePath) : gutil.noop())
		.pipe(gulp.dest(config.scripts.destination))
		.pipe(gsize({
			title: 'JS:     ',
			showFiles: true
		}));
}
jsRender.description = 'Render Javascript files';
gulp.task(jsRender);

// JS Task
js = gulp.parallel('jsHint', 'jsRender');
js.description = gutil.colors.inverse(' Render Javascript ') + ' Files and Hint them';
js.flags = config.flagNotice.js;
gulp.task('js', js);
