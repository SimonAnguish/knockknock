'use strict';

angular.module('roomieApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/welcome', {
        templateUrl: 'app/welcome/welcome.html',
        controller: 'WelcomeCtrl'
      });
  });
