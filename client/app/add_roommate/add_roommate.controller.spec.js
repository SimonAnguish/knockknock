'use strict';

describe('Controller: AddRoommateCtrl', function () {

  // load the controller's module
  beforeEach(module('roomieApp'));

  var AddRoommateCtrl,
      scope,
      $httpBackend;;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/simons')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    AddRoommateCtrl = $controller('AddRoommateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
