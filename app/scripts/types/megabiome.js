'use strict';

var _ = require('lodash');
var Biome = require('./biome.js');
var getRandom = require('../getRandom.js');
var biomeTypes = require('./biomeTypes.js');

module.exports = class Megabiome {
	constructor(sideLength, attributes) {
		console.groupCollapsed('Megabiome creation');

		// Create rows
		var biomes = new Array(sideLength);

		// If the array is sparse it won't properly iterate
		_.fill(biomes, null);

		for (var x in biomes) {
			// Create columns
			biomes[x] = new Array(sideLength);

			// If the array is sparse it won't properly iterate
			_.fill(biomes[x], null);

			for (var y in biomes[x]) {
				console.log('Initializing at: ' + x + ', ' + y);
				var type = biomeTypes[Math.floor(getRandom(x, y, 'biome type') * 1000) % biomeTypes.length];
				var biome = new Biome({
					'type': type
				});
				biomes[x][y] = biome;

				console.log('Initialized biome: ' + JSON.stringify(biome));
			}
		}

		this.biomes = biomes;
		this.physics = attributes.physics;

		console.groupEnd();
	}
};
