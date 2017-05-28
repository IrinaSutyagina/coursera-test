(function(){
    'use strict';

angular.module('NarrowItDownApp', [])
.controller ('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective(){
    var ddo = {
        templateUrl:'foundItems.html',
        scope: {
            items:'<',
            onRemove: '&',
            emptyResultMessage: '@message'
 
        },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
    };
    return ddo;
}

function FoundItemsDirectiveController (){
    var list = this;    
}


NarrowItDownController.$inject = ['MenuSearchService']
function NarrowItDownController(MenuSearchService) {

    var menu = this;
    menu.found = [];
    menu.searchTerm = "";
    menu.nothingFoundMsg = "";

    menu.getMatchedMenuItems = function () {
        var promise = MenuSearchService.getMatchedMenuItems();
        menu.menuItems = [];
        promise.then(function (response) {
            var foundItems = [];
            console.log(response.data);
            console.log(response.data.menu_items.length);
            console.log(menu.searchTerm.toLowerCase());
            if (menu.searchTerm != "" && menu.searchTerm != null) {
                for (var i = 0; i < response.data.menu_items.length; i++) {
                    if (response.data.menu_items[i].description.toLowerCase().indexOf(menu.searchTerm.toLowerCase()) != -1) {
                        console.log(response.data.menu_items[i]);
                        foundItems.push(response.data.menu_items[i]);
                    }
                }
            }
            console.log(foundItems);
            menu.found = foundItems;
            menu.nothingFoundMsg = "Nothing found!";
        })
            .catch(function () {
                console.log('error');
            });

    };

    menu.removeMenuItem = function (itemIndex) {
        menu.found.splice(itemIndex, 1);
    }

}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function () {
      var response =  $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json")
      });
      return response;
  }
};


})();