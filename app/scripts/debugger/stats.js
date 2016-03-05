'use strict';

var stats = {};

stats.init = function(view) {
	view.innerHTML = 'No statistics to show.';
};

stats.teardown = function(view) {
	view.innerHTML = '';
};

module.exports = stats;
