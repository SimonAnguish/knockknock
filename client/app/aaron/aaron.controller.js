'use strict';

angular.module('roomieApp')
  .controller('AaronCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];
    $scope.chores = [{
      'name': 'Mop'
    }];
    $scope.events = [{
      'name': 'Doctor\'s appointment',
      'location': 'STD Clinic'
    }];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
  });
