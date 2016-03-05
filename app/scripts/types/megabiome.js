var _ = require('lodash');
var Biome = require('./biome.js');

module.exports = class Megabiome {
	constructor(sideLength, attributes) {
		this.biomes = new Array(sideLength);
		_.fill(this.biomes, new Array(sideLength));
		this.biomes.forEach(function(row) {
			_.fill(row, new Biome());
		});

		this.physics = attributes.physics;
	}
};
