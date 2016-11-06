'use strict';

var util = {};

var seed = require('./seed.js')();
var Biome = require('./types/biome.js');
var random = require('seed-random');
var assert = require('assert');

function getRandom(superX, superY, x, y, desc) {
	// This seems to be a bug in Browserify or one of its plugins
	return random()(seed + '.' + superX + '.' + superY + '.' + x + '.' + y + desc );
}

util.biome = function(superX, superY, x, y, attributes) {

	var biome = new Biome({
	});

	console.log('Creating new biome at (' + x + ', ' + y + '), super (' + superX + ', ' + superY + '): ' + JSON.stringify(biome));
};

module.exports = util;
