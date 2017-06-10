(function () {
"use strict";

angular.module('common')
.service('MyInfoService', MyInfoService);


function MyInfoService() {
    var service = this;

    var myInfo;

    service.saveMyInfo = function (firstName, lastName, email, phoneNo, favChoice) {
        console.log(firstName);
        console.log(lastName);
      myInfo = {
        myInfoFN: firstName,
        myInfoLN: lastName,
        myInfoEmail: email ,
        myInfoPN: phoneNo,
        myInfoFavChoice: favChoice
      };
    };

    service.getMyInfo = function (){
        console.log (myInfo);
        return myInfo;
    }
}

})();
