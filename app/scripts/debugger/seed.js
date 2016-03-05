'use strict';

var seed = {};

var seedNumber = require('../seed.js')();

seed.init = function(view) {
	var div = document.createElement('div');
	var seedSpan = document.createElement('span');
	
	div.appendChild(document.createTextNode('Seed: '));
	div.appendChild(seedSpan);
	seedSpan.appendChild(document.createTextNode(seedNumber.toString()));

	view.appendChild(div);
};

seed.teardown = function(view) {
	view.innerHTML = '';
};

module.exports = seed;
