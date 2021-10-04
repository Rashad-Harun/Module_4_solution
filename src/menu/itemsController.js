
(()=> {
    'use strict';
    angular.module('MenuApp')
    .controller('ItemsController', ItemsController)



    ItemsController.$inject = ['items']
    function ItemsController(items){
        let ctrl = this;
        ctrl.items = items.menu_items;
        ctrl.title = items.category;
    }
})();