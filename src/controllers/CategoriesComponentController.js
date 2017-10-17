(function(){
	'use strict';
	angular.module('data')
	.controller('CategoriesComponentController',  CategoriesComponentController);
	CategoriesComponentController.$inject = ['MenuDataService','items'];
	function CategoriesComponentController(MenuDataService, items){
		var $ctrl = this;
		$ctrl.items = items.data;

	}
})();