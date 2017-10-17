(function(){
	'use strict';
	angular.module('data')
	.component('categories',{
		templateUrl:'categories.template.html',
		controller:CategoriesComponentController,
		bindings:{
			items:'<'
		}
	});
	
	CategoriesComponentController.$inject = ['MenuDataService'];
	function CategoriesComponentController(){
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