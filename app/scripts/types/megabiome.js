var _ = require('lodash');
var Biome = require('./biome.js');
var getRandom = require('../getRandom.js');
var biomeTypes = require('./biomeTypes.js');

module.exports = class Megabiome {
	constructor(sideLength, attributes) {
		// Rows
		this.biomes = new Array(sideLength);

		// Columns
		_.fill(this.biomes, new Array(sideLength));

		var biomes = this.biomes;
		for (var x in biomes) {
			// If the array is sparse it won't properly iterate
			_.fill(biomes[x], null);
			for (var y in x) {
				console.log('Initializing at: ' + x + ', ' + y);
				var type = biomeTypes[Math.floor(getRandom(x, y, 'biome type') * 1000) % biomeTypes.length - 1];
				biomes[x][y] = new Biome({
					"type": type
				});

				console.log('Initialized biome: ' + JSON.stringify(biomes[x][y]));
			};
		};

		this.physics = attributes.physics;
	}
};
