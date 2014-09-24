(function () {
    'use strict';
    var id = 'app';

    var app = angular.module('app', ['ngRoute', 'ngAnimate']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeCtrl',
                templateUrl: 'app/home/views/index.html'
            })
            .when('/icons', {
                controller: 'HomeCtrl',
                templateUrl: 'app/home/views/icons.html'
            })
            .otherwise({
                controller: 'HomeCtrl as vm',
                templateUrl: 'app/views/404.html'
            });
    });

    app.controller('AppCtrl', function AppCtrl($scope, $timeout) {

        // This theme function is used only for example
        // please choose a theme and fix the "bootstrap-{{ theme }}.min.css"
        // on the index.html
        $scope.theme = 'default';

        $scope.changeTheme = function(theme) {
            $scope.theme = theme;
        };
    });
})();