(function () {
'use strict';

angular.module('MenuApp')
.service('MenudataService', MenudataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenudataService.$inject = ['$q', '$http', 'ApiBasePath']
function MenudataService($q, $http, ApiBasePath) {
  var service = this;

  // List of shopping items
  var items = [];

  // Pre-populate a no cookie list
  items.push({
    name: "Sugar",
    quantity: "2 bags",
    description: "Sugar used for baking delicious umm... baked goods."
  });
  items.push({
    name: "flour",
    quantity: "1 bags",
    description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
  });
  items.push({
    name: "Chocolate Chips",
    quantity: "3 bags",
    description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
  });

  // Simulates call to server
  // Returns a promise, NOT items array directly
  // service.getItems = function () {
  //   return items;
  // };

  service.getItems = function () {
    return $http(
      {
        method: "GET",
        url: (ApiBasePath + "/categories.json"),
      }).then(function (result) {
        // process result and only keep items that match
        var foundItems = new Array();
        foundItems = result.data;
        console.log(result.data); 
        return foundItems;
      });
  };

// //     service.getCategoryItems = function (shortName) {
//       return $http(
//         {
//           method: "GET",
//           url: (ApiBasePath + "/menu_items.json"),
//           params: {
//             category: shortName
//           }
//         }).then(function (result) {
//         // process result and only keep items that match
//         var foundItems = new Array();
//         foundItems = result.data;
//         console.log("Found in service: " + result.data); 
//         return foundItems;
//       })
//       .catch(function (error) {
//     console.log("Something went terribly wrong.");
//   });
// };

  service.getCategoryItems = function (shortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: shortName
      }
    });

    return response;
  };

}

})();
