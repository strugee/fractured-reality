'use strict';

var mb = require('../megabiomeUtil.js');

var gridInspector = {};

gridInspector.init = function(view) {
	// TODO: this assumes 0, 0
	var megabiome = mb.megabiome(0, 0);

	var table = document.createElement('table');

	// y
	for (var y = 0; y < megabiome.biomes.length; y++) {
		var tr = document.createElement('tr');

		// x
		for (var x = 0; x < megabiome.biomes[0].length; x++) {
			var biome = megabiome.biomes[x][y];

			var td = document.createElement('td');
			var text = document.createTextNode(' ');
			td.appendChild(text);
			td.classList.add('gridInspector-cell');
			td.style = 'background-color: ' + biome.type.color;
			td.setAttribute('data-x', x);
			td.setAttribute('data-y', y);
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
