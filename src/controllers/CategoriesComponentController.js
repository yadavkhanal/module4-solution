(function(){
	'use strict';
	angular.module('data')
	.controller('CategoriesComponentController',  CategoriesComponentController);
	CategoriesComponentController.$inject = ['MenuDataService','items'];
	function CategoriesComponentController(MenuDataService, items){
		var $ctrl = this;
		$ctrl.items = items.data;
/*		$ctrl.getAllCategories = function(){
			MenuDataService.getAllCategories().then(function(response){				 
				$ctrl.items  = response.data.menu_items;
			}).catch(function(error){
				console.log("something went wrong");
			});
		}*/
	}
})();