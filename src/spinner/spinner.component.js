
// Note
// This files is for the bonus score

(()=> {
    'use strict';
    angular.module('spinner')
    .component('loadingSpinner', {
        template: '<div ng-if="$ctrl.showSpinner" class="lds-ring"><div></div><div></div><div></div><div></div></div>',
        controller: SpinnerController
    })

    SpinnerController.$inject = ['$transitions']
    function SpinnerController($transitions) {
      var $ctrl = this;
      var cancellers = [];
    
      $ctrl.$onInit = function () {
        var cancel = $transitions.onStart({}, function(){
            $ctrl.showSpinner = true;
        })
        cancellers.push(cancel);
        cancel = $transitions.onSuccess({}, function(){
            $ctrl.showSpinner = false;
        })
        cancellers.push(cancel);
        cancel = $transitions.onError({}, function(){
            $ctrl.showSpinner = false;
        })
        cancellers.push(cancel);
      };
      
      $ctrl.$onDestroy = function () {
        cancellers.forEach(function (item) {
          item();
        });
      };
    
    };

})();