
(()=> {
    'use strict';
    angular.module('MenuApp')
    .component('itemsList', {
        templateUrl: 'views/components/itemsComp.html',
        bindings: {
            listItems: '<',
        }
    })
})() 