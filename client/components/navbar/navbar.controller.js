'use strict';

angular.module('roomieApp')
<<<<<<< HEAD
  .controller('NavbarCtrl', function ($scope, $http) {
    $scope.user_path = '';

    $http.get('/api/simon').then(function(user_stuff) {
      $scope.simon_status = user_stuff.home;
    });
=======
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Simon',
      'link': '/simon',
      'home': 1
    },
    {
      'title': 'Aaron',
      'link': '/aaron',
      'home': 0
    },
    {
      'title': 'James',
      'link': '/james',
      'home': 0
    }];
>>>>>>> 2d8cbaca725315cf46d42fff86c586038eb47363

    $http.get('/api/aaron').then(function(user_stuff) {
      $scope.aaron_status = user_stuff.home;
    });

    $http.get('/api/james').then(function(user_stuff) {
      $scope.james_status = user_stuff.home;
    });

    $scope.menu = [{
      'name': 'Simon',
      'home': $scope.simon_status,
      'link': '/simon'
    },{
      'name': 'Aaron',
      'home': $scope.aaron_status,
      'link': '/aaron'
    },{
      'name': 'James',
      'home': $scope.james_status,
      'link': '/james'
    }];
  });