'use strict';

/**
 * @ngdoc function
 * @name bookstoreApp.controller:AddCtrl
 * @description
 * # AddCtrl
 * Controller of the bookstoreApp
 */
angular.module('bookstoreApp')
    .controller('AddCtrl', function ($scope, $http, $location) {
        $scope.book = {
            title: '',
            author: '',
            summary: '',
            year: 2016
        };
        
        $scope.addBook = function () {
            $http.post('/api/book', $scope.book).then(function() {
                $location.url('/search');
            });
        };
    });