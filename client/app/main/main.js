'use strict';

angular.module('roomieApp')
  .config(function ($routeProvider) {
  	// Start copy here to add more routes
  	$routeProvider
  		.when('/simon', {
  			templateUrl: 'app/main/main.html',
  			controller: 'SimonCtrl'
  		}),
  	// End copy here to add routes
    $routeProvider
      .when('/aaron', {
        templateUrl: 'app/main/main.html',
        controller: 'AaronCtrl'
      }),
    $routeProvider
      .when('/james', {
        templateUrl: 'app/main/main.html',
        controller: 'JamesCtrl'
      }),
    $routeProvider
      .when('/welcome', {
        templateUrl: 'app/welcome/welcome.html',
        controller: 'WelcomeCtrl'
      }),
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });