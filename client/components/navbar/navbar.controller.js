'use strict';

angular.module('roomieApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'name': 'Simon',
      'home': true,
      'link': '/simon'
    },{
      'name': 'Aaron',
      'home': false,
      'link': '/aaron'
    },{
      'name': 'James',
      'home': false,
      'link': '/james'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });