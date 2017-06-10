(function () {

    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService', 'MyInfoService'];
    function SignUpController(MenuService, MyInfoService) {
        var myInfo = this;
        myInfo.submit = function (shortName) {
            // console.log(myInfo.user.firstName);
            // console.log(myInfo.user.lastName);
            // console.log(myInfo.user.email);
            // console.log(myInfo.user.phone);
            // console.log(myInfo.user.menuItemShortName);
            console.log(shortName);
            var firstName = myInfo.user.firstName;
            var lastName = myInfo.user.lastName;
            var email = myInfo.user.email;
            var phone = myInfo.user.phone;
            var favChoice = myInfo.user.menuItemShortName;

            myInfo.error = false;
            myInfo.saved = false;
            var promise = MenuService.getMenuItem(shortName);
            promise.then(function (response) {
          //      console.log(response.data);
                MyInfoService.saveMyInfo(firstName, lastName, email, phone, favChoice);
                //MyInfoService.getMyInfo();
                myInfo.saved = true;
            })
                .catch(function (error) {
            //        console.log(error);
                    myInfo.error = true;
                })

        };

    }



})();