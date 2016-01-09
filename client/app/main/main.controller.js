'use strict';

angular.module('roomieApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.users = [{
      'name': 'Simon',
      'home': true
    },{
      'name': 'Aaron',
      'home': false
    },{
      'name': 'James',
      'home': false
    }];

    $scope.chores = [{
      'name': 'Do the dishes',
      'person': 'Simon';
    },{
      'name': 'Sweep the floors',
      'person': 'Aaron'
    },{
      'name': 'Mop the kitchen',
      'person': 'James'
    },{
      'name': 'Take out the trash',
      'person': 'Aaron'
    },{
      'name': 'Clean the litter box',
      'person': 'Simon'
    }]

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