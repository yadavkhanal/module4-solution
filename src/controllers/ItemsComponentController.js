(function(){
	'use strict';
	angular.module('data')
	.controller('ItemsComponentController', ItemsComponentController);
	ItemsComponentController.$inject = ['items'];
	function ItemsComponentController(items){
		var $ctrl = this;
		$ctrl.items = items.data.menu_items;		
	}
})();