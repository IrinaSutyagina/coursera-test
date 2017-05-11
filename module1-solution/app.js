(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.checkMenu = function () {
   var resultMsg = checkMenuItems($scope.menu);
   $scope.displayMessage = resultMsg;
  };

function checkMenuItems(string) {
    var menuItemsCount;
    var resultMsg = "Enjoy!";
    if (angular.isUndefined(string)){
      string = '';
    }
    if (string == ''){
      return "Please enter data first";
    }
    menuItemsCount = countMenuItems(string);
    if (menuItemsCount > 3){
      return "Too much!";
    }
    if (menuItemsCount == 0){
      //Enter any symbol but ','
      return "Please enter something edible :)!";
    }
    return resultMsg;
  };

function countMenuItems (arrayStr){
    var menuItems = arrayStr.split(',');
    var menuItemsCount = 0;
    for (var i = 0; i < menuItems.length; i++) {
      if (menuItems[i] != ''){
       menuItemsCount += 1;
      }
    }
  return menuItemsCount;
};

}


})();
