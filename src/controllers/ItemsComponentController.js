(function(){
	'use strict';
	angular.module('data')
	.controller('ItemsComponentController', ItemsComponentController);
	ItemsComponentController.$inject = ['MenuDataService'];
	function ItemsComponentController(MenuDataService){
		var $ctrl = this;
		$ctrl.getItemsForCategory = function(categoryShortName){
			MenuDataService.getItemsForCategory(categoryShortName).then(function(response){				 
				$ctrl.items  = response.data.menu_items;
			}).catch(function(error){
				console.log("something went wrong");
			});
		}
	}
})();