(function () {

    "use strict";

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['mySavedInfo','ApiPath'];
    function MyInfoController(mySavedInfo, ApiPath) {
        var $ctrl = this;
        $ctrl.mySavedInfo = mySavedInfo; 
        $ctrl.notDefined = (mySavedInfo === undefined || mySavedInfo === null);
        $ctrl.basePath = ApiPath;
    }



})();