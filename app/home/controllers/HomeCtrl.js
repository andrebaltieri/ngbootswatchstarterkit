(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$location']; 

    function HomeCtrl($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'HomeCtrl';

        activate();

        function activate() { }
    }
})();
