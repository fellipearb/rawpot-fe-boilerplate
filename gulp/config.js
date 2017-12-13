import path		from 'path'

var CONSTANTS = {
	'SRC': './src/',
	'BLD': './build/'
}

CONSTANTS.ENTRY_POINT = CONSTANTS.SRC + 'index.html'

CONSTANTS.TPL = {
	'SRC': CONSTANTS.SRC,
	'BLD': CONSTANTS.BLD
}

CONSTANTS.STYLES = {
	'SRC': CONSTANTS.SRC + '_styles/',
	'BLD': CONSTANTS.BLD + 'styles/'
}

CONSTANTS.IMAGES = {
	'SRC': CONSTANTS.SRC + '_images/',
	'BLD': CONSTANTS.BLD + 'images/',
	'REL': '../images/'
}

CONSTANTS.SCRIPTS = {
	'SRC': CONSTANTS.SRC + '_scripts/',
	'BLD': CONSTANTS.BLD + 'scripts/',
	'FILENAME': 'main.js'
}

CONSTANTS.VENDOR = {
	'SRC': CONSTANTS.SRC + '_vendor/',
	'BLD': CONSTANTS.BLD + 'vendor/'
}

module.exports = CONSTANTS