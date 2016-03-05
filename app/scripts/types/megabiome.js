module.exports = class Megabiome {
	constructor(sideLength, attributes) {
		this.biomes[sideLength] = [sideLength];
		this.physics = attributes.physics;
	}
};
