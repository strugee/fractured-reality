'use strict';

var mb = require('../megabiomeUtil.js');

var gridInspector = {};

var table;
var viewX = 0;
var viewY = 0;

function formatMegabiome(megaX, megaY) {
	var megabiome = mb.megabiome(megaX, megaY);

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

	return table;
}

function updateTable(view) {
		var oldTable = table;
		table = formatMegabiome(viewX, viewY);

		view.replaceChild(table, oldTable);
}

gridInspector.init = function(view) {
	view.id = 'gridInspector-panel';

	table = formatMegabiome(0, 0);

	var left = document.createElement('button');
	left.appendChild(document.createTextNode('<'));
	left.addEventListener('click', function(event) {
		viewX--;

		updateTable(view);
	});
	view.appendChild(left);

	view.appendChild(table);

	var right = document.createElement('button');
	right.appendChild(document.createTextNode('>'));
	right.addEventListener('click', function(event) {
		viewX++;

		updateTable(view);
	});
	view.appendChild(right);
};

gridInspector.teardown = function(view) {
	view.innerHTML = '';
};

module.exports = gridInspector;
