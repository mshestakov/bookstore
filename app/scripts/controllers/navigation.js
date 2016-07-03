'use strict';

/**
 * @ngdoc function
 * @name bookstoreApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the bookstoreApp
 */
angular.module('bookstoreApp')
    .controller('NavigationCtrl', function ($scope, $location) {
        $scope.$on('$routeChangeSuccess', function (event, current) {
            $scope.active = current.activeTab;
        });

        $scope.go = function (path) {
            $location.url(path);
        };
    });
