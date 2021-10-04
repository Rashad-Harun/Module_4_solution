
(()=> {
    'use strict';
    angular.module('MenuApp')
    .component('categories', {
        templateUrl: 'views/components/categoriesComp.html',
        bindings: {
            cateItems: '<'
        }
    })
})(); 