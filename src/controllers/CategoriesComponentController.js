(function(){
	'use strict';
	angular.module('data')
	.controller('CategoriesComponentController', ['MenuDataService', CategoriesComponentController]);
	//CategoriesComponentController.$inject = ['MenuDataService'];
	function CategoriesComponentController(MenuDataService){
		var $ctrl = this;
		$ctrl.getAllCategories = function(){
			MenuDataService.getAllCategories().then(function(response){				 
				$ctrl.items  = response.data.menu_items;
			}).catch(function(error){
				console.log("something went wrong");
			});
		}
	}
})();