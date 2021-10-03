
(()=> {
    'use strict';
    angular.module('MenuApp')
    .component('categories', {
        templateUrl: 'views/components/categories.comp.html',
        bindings: {
            cateItems: '<'
        }
    })
})(); 