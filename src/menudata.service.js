(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = [ '$http' ];
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function () {
	  var response = $http({
			url : 'https://davids-restaurant.herokuapp.com/categories.json'
		});
		return response;
  };
  service.getItemsForCategory = function(categoryShortName){
	  //append categoryShortName to the url
	  var response = $http({
			url : ' https://davids-restaurant.herokuapp.com/menu_items.json?category=',
			params:{param:categoryShortName}
		});
		return response;
  }
}

})();
