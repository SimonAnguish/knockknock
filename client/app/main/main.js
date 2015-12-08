'use strict';

angular.module('roomieApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/simon', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
    $routeProvider
      .when('/aaron', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
    $routeProvider
      .when('/james', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });