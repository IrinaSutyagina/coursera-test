(function () {
    'use strict';
    angular.module('ShoppingListCheckOffApp', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyLIst = this;

        toBuyLIst.items = ShoppingListCheckOffService.getToBuyItems();

        toBuyLIst.buyItem = function (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBoughtList = this;
        alreadyBoughtList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;
        var toBuyItems = [
            {
                name: "Apple",
                quantity: "1"
            },
            {
                name: "Banana",
                quantity: "2"
            },
            {
                name: "Tomato",
                quantity: "3"
            },
            {
                name: "Milk",
                quantity: "4"
            },
            {
                name: "Coffee",
                quantity: "5"
            },
            {
                name: "Tea",
                quantity: "6"
            },
        ];

        var alreadyBoughtItems = [];

        service.getToBuyItems = function () {
            return toBuyItems;
        }

        service.getAlreadyBoughtItems = function () {
            return alreadyBoughtItems;
        }

        service.buyItem = function (itemIndex) {
            alreadyBoughtItems.push(toBuyItems[itemIndex]);
            toBuyItems.splice(itemIndex, 1);
        }

    }

})();