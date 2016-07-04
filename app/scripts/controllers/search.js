'use strict';

/**
 * @ngdoc function
 * @name bookstoreApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the bookstoreApp
 */
angular.module('bookstoreApp')
    .controller('SearchCtrl', function ($scope, $location, list) {
        $scope.sort = {
            order: 'book_rating',
            reverse: true,
            dir: 'down'
        };

        $scope.sortGrid = function (key) {
            $scope.sort.order = key;
            $scope.sort.reverse = !$scope.sort.reverse;
            $scope.sort.dir = $scope.sort.reverse ? 'down' : 'up'
        };

        $scope.preview = function (book) {
            $scope.book = book;
        };

        $scope.list = list.data;
    });
