(function () {
'use strict';

angular.module('MenuApp')
.component('categoryList', {
  templateUrl: 'src1/menu/templates/categorylist.template.html',
  bindings: {
    items: '<'
  }
});

})();
