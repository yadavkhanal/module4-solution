(function() {
	'use strict';

	angular.module('MenuApp', ['ui.router','data'])
	.config(function () {
	  console.log("MenuApp config fired.");
	}).
	run(function () {
	  console.log("MenuApp run fired.");
	});

})();
