'use strict';

angular.module('roomieApp')
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

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });