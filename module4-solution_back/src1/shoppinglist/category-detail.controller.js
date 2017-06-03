(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryDetailController', CategoryDetailController);


CategoryDetailController.$inject = ['$stateParams', 'items','MenudataService'];
function CategoryDetailController($stateParams, items, MenudataService) {
  var categoryDetail = this;
  var item = items[$stateParams.itemId];
  categoryDetail.items = [];
  console.log("Selected category ID" + $stateParams.itemId);
  var categoryShortName = $stateParams.itemId;
  // categoryDetail.items = function (){
  //  return MenudataService.getCategoryItems("L");
  // }


  var promise = MenudataService.getCategoryItems($stateParams.itemId);

  promise.then(function (response) {
    categoryDetail.items = response.data.menu_items;
    console.log(response.data)
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });

console.log(categoryDetail.items);
//   itemDetail.name = item.name;
//   itemDetail.quantity = item.quantity;
//   itemDetail.description = item.description;
}

})();
