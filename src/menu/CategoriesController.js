
(()=> {
    'use strict';
    angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController)


    CategoriesController.$inject = ['categoryItems']
    function CategoriesController(categoryItems){
        let ctrl = this;

        ctrl.categoryItems = categoryItems;
    }
})()  