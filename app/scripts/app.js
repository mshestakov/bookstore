'use strict';

angular.module('bookstoreApp', ['ngRoute', 'mock'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/top10', {
                templateUrl: 'views/top10.html',
                controller: 'Top10Ctrl',
                activeTab: 'top10',
                resolve: {
                    data: function ($q, $http) {
                        return $q.all({
                            books: $http.get('/api/book?sortBy=book_rating&limitTo=10'),
                            authors: $http.get('/api/author/?sortBy=author_rating&limitTo=10')
                        });
                    }
                }
            })
            .when('/search', {
                templateUrl: 'views/search.html',
                controller: 'SearchCtrl',
                activeTab: 'search',
                resolve: {
                    list: function ($http, $route) {
                        var query = $route.current.params.query || '';
                        return $http.get('/api/book?query=' + query); // ?query=' + query + '&limitTo=10
                    }
                }
            })
            .when('/add', {
                templateUrl: 'views/add.html',
                controller: 'AddCtrl'
            })
            .when('/book/:bookId/', {
                templateUrl: 'views/book.html',
                controller: 'BookCtrl',
                resolve: {
                    book: function ($http, $route) {
                        var bookId = $route.current.params.bookId;
                        return $http.get('/api/book/' + bookId);
                    }
                }
            })
            .otherwise({redirectTo: '/top10'});
    });