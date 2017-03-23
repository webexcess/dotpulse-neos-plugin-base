function getBackendLanguageCode(code) {
	try {
		code = Em.I18n.translations.Dotpulse_Base.NodeTypes_Language.code;
	} catch (error) {} finally {
		return (typeof code === 'string') ? code : false;
	}
}

NeosEvents('ContentModuleLoaded', function() {
	document.documentElement.setAttribute('data-lang', getBackendLanguageCode('de'));
});
