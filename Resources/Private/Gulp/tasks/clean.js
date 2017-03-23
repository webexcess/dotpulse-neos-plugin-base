function clean(callback) {
	bconsole.clear();
	return del(
		[
			config.assets.destination,
			config.maps.destination,
			config.scripts.destination,
			config.styles.destination,
			config.inlineAssets
		],
		{
			force: true
		},
		callback
	);
}
clean.description = 'Clean public folders (Assets, Scripts, Styles, Maps)';
gulp.task(clean);
