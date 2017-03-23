// jscs:disable maximumLineLength
GLOBAL.bconsole = require('better-console');
GLOBAL.del      = require('del');
GLOBAL.gcache   = require('gulp-memory-cache');
GLOBAL.gchmod   = require('gulp-chmod');
GLOBAL.gflatten = require('gulp-flatten');
GLOBAL.gheader  = require('gulp-header');
GLOBAL.glob     = require('glob');
GLOBAL.gmaps    = require('gulp-sourcemaps');
GLOBAL.gplumber = require('gulp-plumber');
GLOBAL.gsize    = require('gulp-size');
GLOBAL.gulp     = require('gulp');
GLOBAL.gutil    = require('gulp-util');
GLOBAL.path     = require('path');
var env         = gutil.env;
GLOBAL.mode     = {
	beautify: env.b || env.bd || env.bm || env.bdm ? true : false,
	minimize: env.d || env.bd || env.dm || env.bdm ? false : true,
	maps: env.m || env.bm || env.dm || env.bdm ? true : false
};

var siteFolder   = (settings.system === 'Neos') ? 'Sites'   : 'Application';
var pluginFolder = (settings.system === 'Neos') ? 'Plugins' : 'Application';

// Allgemeine Pfade
var path = {
	packages    : 'www/' + settings.system + '/Packages',
	includeFile : '/**/_all.scss'
};

if (settings.multisite) {
	siteFolder = pluginFolder;
}

// Pfade für Seite
path.site = {
	base: path.packages + '/' + siteFolder
};
path.site.resources = path.site.base + '/' + settings.theme + '/Resources';
path.site.private   = path.site.resources + '/Private';
path.site.public    = path.site.resources + '/Public';

// Render Ordner
path.render = {
	styles  : path.site.private + '/Scss/*',
	scripts : path.site.private + '/Javascripts/*'
};

// Pfade für Plugins
path.plugins = {
	base: path.packages + '/' + pluginFolder
};
path.plugins.private = path.plugins.base + '/**/Resources/Private';
path.plugins.public  = path.plugins.base + '/**/Resources/Public';

// Pfade für Assets
path.assets = {
	private : [path.site.private + '/Images/**', path.site.private + '/Fonts/**', path.plugins.private + '/Images/**', path.plugins.private + '/Fonts/**'],
	public  : path.site.public + '/Assets'
};

if (settings.multisite) {
	path.assets.private = [path.plugins.private + '/Images/**', path.plugins.private + '/Fonts/**'];
}

var notify = require('gulp-notify');

module.exports = {
	banner : ['/*!',
		' * <%= info.name %> - powered by <%= info.system %> & dotpulse.ch',
		' * @build <%= timestamp %>',
		' * @link <%= info.url %>',
		' */',
		''].join('\n'),
	timestamp: function() {
		var timestamp;
		var now = new Date();
		timestamp  = now.getFullYear().toString();
		timestamp += '-';
		timestamp += (now.getMonth() < 9 ? '0' : '') + (now.getMonth() + 1).toString();
		timestamp += '-';
		timestamp += (now.getDate() < 10 ? '0' : '') + now.getDate().toString();
		timestamp += ' ';
		timestamp += (now.getHours() < 10 ? '0' : '') + now.getHours().toString();
		timestamp += ':';
		timestamp += (now.getMinutes() < 10 ? '0' : '') + now.getMinutes().toString();
		//timestamp += ':';
		//timestamp += (now.getSeconds() < 10 ? '0' : '') + now.getSeconds().toString();
		return timestamp;
	},
	flags: {
		'--b'   : ' ' + gutil.colors.underline('b') + 'eautify CSS',
		'--d'   : ' ' + gutil.colors.underline('d') + 'ont\'t compress rendered files',
		'--m'   : ' write source' + gutil.colors.underline('m') + 'aps',
		'--bd'  : ' ' + gutil.colors.underline('d') + 'ont\'t compress rendered files and ' + gutil.colors.underline('b') + 'eautify CSS',
		'--bm'  : ' ' + gutil.colors.underline('b') + 'eautify CSS and write source' + gutil.colors.underline('m') + 'aps',
		'--dm'  : ' ' + gutil.colors.underline('d') + 'ont\'t compress rendered files and write source' + gutil.colors.underline('m') + 'aps',
		'--bdm' : ' ' + gutil.colors.underline('d') + 'ont\'t compress rendered files, ' + gutil.colors.underline('b') + 'eautify CSS and write source' + gutil.colors.underline('m') + 'aps'
	},
	flagNotice: {
		js: {
			'd/m': ' look at the default task for more information'
		},
		css: {
			'b/d/m': ' look at the default task for more information'
		}
	},
	publicPath : path.site.public,
	styles     : {
		source      : path.render.styles,
		includePath : [path.site.private + path.includeFile, path.plugins.private + path.includeFile],
		destination : path.site.public  + '/Styles',
		sassOptions : {
			// https://github.com/sass/node-sass#includepaths
			includePaths: [path.site.base, path.plugins.base],
			// https://github.com/sass/node-sass#imagepath
			imagePath: '../Assets',
			// https://github.com/sass/node-sass#outputstyle
			outputStyle: 'nested',
			// https://github.com/sass/node-sass#precision
			precision: 10,
			// https://github.com/sass/node-sass#sourcecomments
			sourceComments: false
		},
		postcss: {
			assets: {
				loadPaths: [path.assets.public],
				relativeTo: path.site.public  + '/Styles',
				cachebuster: false
			},
			svgFallback: {
				basePath: path.assets.public,
				dest: path.assets.public,
				fallbackSelector: '.no-svgasimg'
			},
			rucksack: {
				fallbacks: false
			},
			fontmagician: {
				hosted: path.assets.public,
				formats: 'local woff2 woff eot svg ttf otf'
			},
			mqpacker: {
				sort: true
			},
			cssnano: {
				autoprefixer: {
					add: true,
					browsers: ['last 2 version', '> 1%', 'safari 7', 'ie 9', 'bb 10', 'android 4']
				},
				zindex: false,
				discardComments: {
					removeAll: true
				}
			}
		},
		cssbeautifyOptions: {
			indent: '	',
			autosemicolon: true
		}
	},
	scripts: {
		source: path.render.scripts,
		privatePath: path.site.private,
		destination: path.site.public  + '/Scripts',
		prettifyOptions: {
			logSuccess : false,
			indentChar : '	',
			indentSize : 1
		},
		includePaths : [
			'/www/' + settings.system + '/Packages/' + siteFolder,
			'/www/' + settings.system + '/Packages/' + pluginFolder,
			'/www/' + settings.system + '/Packages',
			'/'
		],
		uglifyOptions: {
			mangle : true
		}
	},
	maps: {
		destination: path.site.public  + '/Maps',
		relativePath: '../Maps'
	},
	assets: {
		source: path.assets.private,
		destination: path.assets.public
	},
	watch: {
		styles:   [path.plugins.private + '/**/*.scss', path.site.private + '/**/*.scss','!' + path.plugins.private + '/**/_all.scss', '!' + path.site.private + '/**/_all.scss'],
		scripts:  [path.plugins.private + '/**/*.js',   path.site.private + '/**/*.js']
	},
	handleErrors: function() {
		var args         = Array.prototype.slice.call(arguments);
		args[0].filename = args[0].file.split('/').pop();
		args[0].notify   = args[0].message.split('\n')[1].trim();

		notify.logLevel(2);
		notify.onError({
			title: '<%= error.name %> in «<%= error.filename %>»',
			subtitle: '<%= error.plugin %>',
			wait: true,
			message: '<%= error.notify %>',
			sound: 'Beep'
		}).apply(this, args);

		this.emit('end');
	}
};

if (settings.system === 'Flow' || settings.multisite) {
	module.exports.styles.sassOptions.includePaths = [path.plugins.base];
	module.exports.watch = {
		styles:  [path.plugins.private + '/**/*.scss','!' + path.plugins.private + '/**/_all.scss'],
		scripts: [path.plugins.private + '/**/*.js']
	};
}
