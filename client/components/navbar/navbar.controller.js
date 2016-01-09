'use strict';

angular.module('roomieApp')
  .controller('NavbarCtrl', function ($scope, $http) {
    $scope.user_path = '';

    $http.get('/api/simon').then(function(user_stuff) {
      $scope.simon_status = user_stuff.home;
    });

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