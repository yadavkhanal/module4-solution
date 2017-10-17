(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider
  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/categories/categories.template.html',
    //controller: 'CategoriesController as ctrlCat',
/*	 resolve : {
				items : [ 'ShoppingListService', function(ShoppingListService) {
					return ShoppingListService.getItems();
				} ]
			}*/
  })

  // Item detail
  .state('categories.items', {
    // url: '/item-detail/{itemId}',
    templateUrl: 'src/templates/item.template.html',
   // controller: 'ItemDetailController as itemDetail',
    params: {
      itemId: null
    }
  });

}

})();
