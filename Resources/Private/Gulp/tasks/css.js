// jscs:disable maximumLineLength
var fs        = require('fs');
var gbeautify = require('gulp-cssbeautify');
var sass      = require('gulp-sass');
var postcss   = require('gulp-postcss');
var cssnano   = require('cssnano'); // https://github.com/ben-eb/cssnano

// Post SCSS
var pc = config.styles.postcss;
var postScss = [
	require('lost'),                                   // https://github.com/peterramsing/lost
	require('postcss-short'),                          // https://github.com/jonathantneal/postcss-short
	require('postcss-center'),                         // https://github.com/jedmao/postcss-center
	require('rucksack-css')(pc.rucksack),              // http://simplaio.github.io/rucksack/
	require('postcss-flexbox'),                        // https://github.com/archana-s/postcss-flexbox
	require('postcss-assets')(pc.assets),              // https://github.com/borodean/postcss-assets
	require('postcss-svg-fallback')(pc.svgFallback),   // https://github.com/justim/postcss-svg-fallback
	require('postcss-flexibility'),                    // https://github.com/10up/flexibility
	require('pleeease-filters'),                       // https://github.com/iamvdo/pleeease-filters
	require('postcss-selector-matches'),               // https://github.com/postcss/postcss-selector-matches
	require('postcss-selector-not'),                   // https://github.com/postcss/postcss-selector-not
	require('postcss-pseudoelements'),                 // https://github.com/axa-ch/postcss-pseudoelements
	require('css-mqpacker')(pc.mqpacker),              // https://github.com/hail2u/node-css-mqpacker
	require('postcss-fixes')(pc.fixes)                 // https://github.com/MattDiMu/postcss-fixes
];

function cssRender() {
	return gulp.src(config.styles.source)
		.pipe(gplumber({
			errorHandler: config.handleErrors
		}))
		.pipe(mode.maps ? gmaps.init({loadMaps: true}) : gutil.noop())
		.pipe(sass(config.styles.sassOptions))
		.pipe(gflatten())
		.pipe(postcss(postScss))
		.pipe(mode.minimize ? postcss([cssnano(pc.cssnano)]) : gutil.noop())
		.pipe(mode.beautify ? gbeautify(config.styles.cssbeautifyOptions) : gutil.noop())
		.pipe(gulp.dest(config.inlineAssets))
		.pipe(gheader(config.banner, {
			info: settings,
			timestamp: config.timestamp()
		}))
		.pipe(gchmod(644))
		.pipe(mode.maps ? gmaps.write(config.maps.relativePath) : gutil.noop())
		.pipe(gplumber.stop())
		.pipe(gulp.dest(config.styles.destination))
		.pipe(gsize({
			title: 'CSS:    ',
			showFiles: true
		}));
}
cssRender.description = 'Render CSS files with SCSS and PostCSS';
gulp.task(cssRender);

// Hack the ability to import directories in Sass
// Import the whole directory with @import "foobar/all";
function scssRender(callback) {
	config.styles.includePath.forEach(function(folder) {
		glob(folder, function(error, files) {
			files.forEach(function(allFile) {
				// Add a banner to warn users
				fs.writeFileSync(allFile, '// This is a dynamically generated file\n\n');

				var directory = path.dirname(allFile);
				var partials = fs.readdirSync(directory).filter(function(file) {
					return (
						// Exclude all files with "_"
						file.indexOf('_') !== 0 && path.extname(file) === '.scss'
					);
				});
				// Append import statements for each partial
				partials.forEach(function(partial) {
					partial = partial.replace('.scss', '');
					fs.appendFileSync(allFile, '@import \'' + partial + '\';\n');
				});
			});
		});
	});
	callback();
}
scssRender.description = 'Find any _all.scss files and write @import statements for all other *.scss files in the same directory';
gulp.task(scssRender);

// CSS Complete
css = gulp.series('scssRender', 'cssRender');
css.description = gutil.colors.inverse(' Render CSS ') + ' Files';
css.flags = config.flagNotice.css;
gulp.task('css', css);
