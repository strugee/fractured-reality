// seed.js - get the level seed

var seed;

module.exports = function() {
	if (typeof seed === 'undefined') {
		seed = Math.random();
	}
	
	return seed;
};
