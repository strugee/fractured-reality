var seed = require('./seed.js')();
var random = require('seed-random');

function getRandom(x, y, desc) {
	// This seems to be a bug in Browserify or one of its plugins
	return random()(seed + '.' + x + '.' + y + desc);
}

