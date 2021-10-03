
(()=> {
    'use strict';
    angular.module('MenuApp').config(configFunc)


    configFunc.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configFunc($stateProvider, $urlRouterProvider){
        
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html'
        })
        
        .state('categories', {
            url: '/categories',
            templateUrl: 'views/categories.html',
            controller: 'CategoriesController as ctrl',
            resolve: {
                categoryItems: ['MenuDataService', function(MenuDataService){
                    return MenuDataService.getAllCategories().then(response =>{
                        return response.data;
                    })
                }]
            }
        })
        
        .state('items', {
            url: '/items/:id',
            templateUrl: '/views/itemsList.html',
            controller: 'ItemsController as ctrl',
            resolve: {
                items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams){
                    var paramId = $stateParams.id;
                    return MenuDataService.getItemsForCategory(paramId).then(response =>{
                        return response.data;
                    })
                }]
            }
        });
    }
})();