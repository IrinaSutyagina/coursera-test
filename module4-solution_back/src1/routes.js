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
    templateUrl: 'src1/shoppinglist/templates/home.template.html'
  })

  // Premade list page
  .state('categoryList', {
    url: '/category-list',
    templateUrl: 'src1/shoppinglist/templates/main-menu.template.html',
    controller: 'MainShoppingListController as mainList',
    resolve: {
      items: ['MenudataService', function (MenudataService) {
        return MenudataService.getItems();
      }]
    }
  })

    .state('categoryList.categoryDetail', {
    url: '/category-detail/{itemId}',
    templateUrl: 'src1/shoppinglist/templates/category-detail.template.html',
    controller: "CategoryDetailController as categoryDetail"
    
  });

}

})();
