'use strict';

angular.module('roomieApp')
  .controller('WelcomeCtrl', function ($scope, $http) {
<<<<<<< HEAD
    $scope.local_user = getUrlVars()[0];
    $scope.user = '';
    $scope.api_path = '';
    $scope.user_info = [];
    $scope.user_id = '';

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
        var user = awesomeThings[0];
        $scope.user_info = user;
        $scope.is_home = user.home;
        $scope.user_id = user._id;
      });

      if ($scope.is_home) {
        $http.put($scope.api_path + '/' + $scope.user_id, { home: false });
      } else {
        $http.put($scope.api_path + '/' + $scope.user_id, { home: true });
      }
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
=======
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
>>>>>>> 2d8cbaca725315cf46d42fff86c586038eb47363
