var _ = require('lodash');
var Biome = require('./biome.js');

module.exports = class Megabiome {
	constructor(sideLength, attributes) {
		// Rows
		this.biomes = new Array(sideLength);

		// Columns
		_.fill(this.biomes, new Array(sideLength));

		var biomes = this.biomes;
		biomes.forEach(function(x) {
			// If the array is sparse it won't properly iterate
			_.fill(x, {});
			x.forEach(function(y) {
				y = new Biome({
					type: 'generic'
				});
				console.log(JSON.stringify(x));
				console.log('Initializing biome: ' + JSON.stringify(y));
			});
		});

		this.physics = attributes.physics;
	}
};
