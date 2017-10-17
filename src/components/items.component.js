(function(){
	'use strict';
	angular.module('data')
	.component('items',{
		templateUrl:'items.template.html',
		controller:ItemsComponentController,
		bindings:{
			categoryShortName:'<'
		}
	});
	//ItemsComponentController.$inject = ['MenuDataService'];
	function ItemsComponentController(MenuDataService){
		var $ctrl = this;
		$ctrl.getItemsForCategory = function(){
			MenuDataService.getItemsForCategory($ctrl.categoryShortName).then(function(response){				 
				$ctrl.items  = response.data.menu_items;
			}).catch(function(error){
				console.log("something went wrong");
			});
		}
	}
})();