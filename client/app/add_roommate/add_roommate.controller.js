'use strict';

angular.module('roomieApp')
  .controller('AddRoommateCtrl', function ($scope, $http) {
  	$scope.addedSimon = false;
  	$scope.addedAaron = false;
  	$scope.addedJames = false;

    $scope.addSimon = function() {
      if ($scope.addedSimon) {
      	return;
      }
      $http.post('/api/simon', { name: 'Simon', home: true });
  	  $scope.addedSimon = true;
    };

    $scope.addAaron = function() {
      if ($scope.addedAaron) {
      	return;
      }
      $http.post('/api/aaron', { name: 'Aaron', home: false });
  	  $scope.addedAaron = true;
    };

    $scope.addJames = function() {
      if ($scope.addedJames) {
      	return;
      }
      $http.post('/api/james', { name: 'James', home: false });
  	  $scope.addedJames = true;
    };
  });
