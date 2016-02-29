var gridInspector = {};

gridInspector.init = function(view) {
	var table = document.createElement('table');
	
	// For now, assume each biome is the same size, so that megabiomes are 12x12
	for (var i = 0; i < 12; i++) {
		var tr = document.createElement('tr');
		
		for (var j = 0; j < 12; j++) {
			var td = document.createElement('td');
			var text = document.createTextNode('a');
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
