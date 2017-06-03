(function () {
'use strict';

angular.module('MenuApp')
.component('categoryList', {
  templateUrl: 'src1/shoppinglist/templates/categorylist.template.html',
  bindings: {
    items: '<'
  }
});

})();
