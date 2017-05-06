'use strict';

angular.module('roomieApp')
  .controller('JamesCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];
    $scope.chores = [{
      'name': 'Dishes'
    }];
    $scope.events = [{
      'name': 'CS Fair',
      'location': '630 Main Street'
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
