'use strict';

var mb = require('../megabiomeUtil.js');

var gridInspector = {};

gridInspector.init = function(view) {
	// TODO: this assumes 0, 0
	var megabiome = mb.megabiome(0, 0);

	var table = document.createElement('table');

	// x
	for (var i = 0; i < megabiome.biomes.length; i++) {
		var tr = document.createElement('tr');

		// y
		for (var j = 0; j < megabiome.biomes[0].length; j++) {
			var td = document.createElement('td');
			var text = document.createTextNode(' ');
			td.appendChild(text);
			td.classList.add('gridInspector-cell');
			tr.appendChild(td);
		}
		
		table.appendChild(tr);
	}
	
	view.appendChild(table);
};

gridInspector.teardown = function(view) {
	view.innerHTML = '';
};

module.exports = gridInspector;
