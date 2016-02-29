var gridInspector = {};

gridInspector.init = function(view) {
	debugger;
	view.innerHTML = 'Inspecting the grid!';
};

gridInspector.teardown = function(view) {
	view.innerHTML = '';
};

module.exports = gridInspector;
