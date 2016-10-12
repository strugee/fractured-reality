var util = {};

var getRandom = require('./getRandom.js');
var Megabiome = require('./types/megabiome.js');
var assert = require('assert');

var megabiomeCache = new Map();

util.megabiome = function(x, y) {
	var megabiome;

	if (megabiomeCache.get(x + ',' + y)) {
		megabiome = megabiomeCache.get(x + ',' + y);

		console.log('Returning cached megabiome at (' + x + ', ' + y + '): ');
		console.dir(megabiome);

		return megabiome;
	} else {
		// Megabiome side size (max 15)
		var sideSize = Math.floor(getRandom(x, y, 'size') * 1000) % 15;

		// Modulo 10 because there's a 1 in 10 chance of physics not being required
		var physicsRequired = Math.floor(getRandom(x, y, 'physics') * 1000) % 10;
		physicsRequired = physicsRequired === 0 ? false : true;

		// Magic is quite common, so there's only a 1 in 3 chance that it's disallowed
		var magicAllowed = Math.floor(getRandom(x, y, 'magic') * 1000) % 3;
		magicAllowed = magicAllowed === 0 ? false : true;

		megabiome = new Megabiome(sideSize, {
			physics: physicsRequired,
			magic: magicAllowed
		});

		console.log('Created new megabiome at (' + x + ', ' + y + '): ');
		console.dir(megabiome);

		megabiomeCache.set(x + ',' + y, megabiome);

		return megabiome;
	}
};

module.exports = util;
