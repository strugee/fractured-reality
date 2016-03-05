var util = {};

var seed = require('./seed.js')();
var Megabiome = require('./types/megabiome.js');
var random = require('seed-random');
var assert = require('assert');

function getRandom(x, y, desc) {
	return random(seed + '.' + x + '.' + y + desc );
}

util.megabiome = function(x, y) {
	// Modulo 10 because there's a 1 in 10 chance of physics not being required
	var hasPhysics = Math.floor(getRandom(x, y, 'physics') * 10) % 10;
	assert(hasPhysics <= 9);
	assert(hasPhysics >= 0);
	hasPhysics = hasPhysics === 0 ? false : true;

	var megabiome = new Megabiome(12, {
		physics: hasPhysics
	});

	console.log('Creating new megabiome at (' + x + ', ' + y + '): ' + megabiome);
};

util.megabiomeType = function() {

};

module.exports = util;
