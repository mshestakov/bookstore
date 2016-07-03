'use strict';

/**
 * @ngdoc function
 * @name bookstoreApp.controller:Top10Ctrl
 * @description
 * # Top10Ctrl
 * Controller of the bookstoreApp
 */
angular.module('bookstoreApp')
    .controller('Top10Ctrl', function ($scope, data) {
        $scope.books = data.books.data;
        $scope.authors = data.authors.data;
    });
