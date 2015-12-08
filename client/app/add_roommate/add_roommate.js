'use strict';

angular.module('roomieApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/add_roommate', {
        templateUrl: 'app/add_roommate/add_roommate.html',
        controller: 'AddRoommateCtrl'
      });
  });
