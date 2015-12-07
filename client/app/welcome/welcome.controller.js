'use strict';

angular.module('roomieApp')
  .controller('WelcomeCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];
    $scope.current_login = getUrlVars()[0];

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

function getUrlVars()
  {
      var vars = [], hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
   
      for(var i = 0; i < hashes.length; i++)
      {
          hash = hashes[i].split('=');
      hash[1] = unescape(hash[1]);
      vars.push(hash[0]);
          vars[hash[0]] = hash[1];
      }
   
      return vars;
  }
  var urlVars = getUrlVars();