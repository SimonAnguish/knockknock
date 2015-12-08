'use strict';

angular.module('roomieApp')
  .controller('WelcomeCtrl', function ($scope, $http) {
    $scope.local_user = getUrlVars()[0];
    $scope.user = '';
    $scope.api_path = '';
    $scope.user_info = [];

    $scope.sign_in = function() {
      if ($scope.local_user == 'simon') {
        $scope.user = 'Simon';
        $scope.api_path = '/api/simon';

      }
      if ($scope.local_user === 'aaron') {
        $scope.user = 'James';
        $scope.api_path = '/api/aaron';
      }
      if ($scope.local_user === 'james') {
        $scope.user = 'James';
        $scope.api_path = '/api/james';
      }
      $http.get($scope.api_path).success(function(awesomeThings) {
        $scope.user_info = awesomeThings[2];
      });
    };

    
  });

function getUrlVars() {
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