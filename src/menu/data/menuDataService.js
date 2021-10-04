
(()=> {
    'use strict';
    angular.module('data')
    .service('MenuDataService', MenuDataService)

    
    MenuDataService.$inject = ['$http', 'basePath']
    function MenuDataService($http, basePath){
        let service = this;

        service.getAllCategories = function(){
            let promise = $http({
                method: 'GET',
                url: (basePath + '/categories.json')
            })
            return promise;
        };

        service.getItemsForCategory = function(shortName){
            let promise = $http({
                method: 'GET',
                url: (basePath + '/menu_items.json?'),
                params: {
                    category: shortName
                }
            })
            return promise;
        }
    }
})();




// * NOTE * we are injecting the urls as (constant)

// https://davids-restaurant.herokuapp.com/categories.json
// https://davids-restaurant.herokuapp.com/menu_items.json?category=