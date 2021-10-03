
(()=> {
    'use strict';
    angular.module('MenuApp')
    .component('items', {
        templateUrl: 'views/components/items.comp.html',
        bindings: {
            listItems: '<',
        }
    })
})() 