'use strict';

describe('Controller: WelcomeCtrl', function () {

  // load the controller's module
  beforeEach(module('roomieApp'));

  var WelcomeCtrl,
      scope,
      $httpBackend;;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/things')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    WelcomeCtrl = $controller('WelcomeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
