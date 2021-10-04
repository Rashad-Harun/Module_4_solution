
(()=> {
    'use strict';
    angular.module('MenuApp')
    .component('items', {
        templateUrl: 'views/components/itemsComp.html',
        bindings: {
            listItems: '<',
        }
    })
})() 