'use strict';

/**
 * @ngdoc function
 * @name bookstoreApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the bookstoreApp
 */
angular.module('bookstoreApp')
    .controller('BookCtrl', function ($scope, book) {
        $scope.book = book.data;
    });
