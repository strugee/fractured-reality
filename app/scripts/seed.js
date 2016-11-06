// seed.js - get the level seed

'use strict';

var seed;

module.exports = function() {
	if (typeof seed === 'undefined') {
		seed = Math.random();
	}
	
	return seed;
};
