(function() {
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems',foundItems);

  function foundItems() {
    var ddo={
      templateUrl: 'foundItems.html',
      scope: {
        found : '<myList',
        onRemove : '&'
      }
    }
    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];

  function NarrowItDownController(MenuSearchService) {
    var narrowCon = this;
    narrowCon.emptyList="";
    narrowCon.getMatchedMenuItems = function() {
      narrowCon.list = [];
      if (narrowCon.search !=="" && narrowCon.search!==undefined) {
        var promise = MenuSearchService.getMatchedMenuItems(narrowCon.search);
        promise.then(function(response) {
          narrowCon.list = response;
          if(response.length){
            narrowCon.emptyList=false;
          }
          else {
            narrowCon.emptyList=true;
          }
        });
      }
      else {
        narrowCon.emptyList=true;
      }
    }
    narrowCon.dontWantIt = function(index) {
      MenuSearchService.dontWantIt(index);
    }
  }

  MenuSearchService.$inject = ['$http'];

  function MenuSearchService($http) {
    var service = this;
    var arr = [];
    service.getMatchedMenuItems = function(search) {
      arr=[];
      var response = $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      })
      .then(function(response) {
        var list = response.data;
        for (var i = 0; i <list.menu_items.length; i ++) {
          if (list.menu_items[i].description.indexOf(search) != -1) {
            arr.push(list.menu_items[i]);
          }
        }
        return arr;
      });
      return response;
    }
    service.dontWantIt = function (index) {
      arr.splice(index, 1);
    }
  }
})()
