'use strict';

describe('Controller: DiplomaCtrl', function () {

  // load the controller's module
  beforeEach(module('cnmeApp'));

  var DiplomaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DiplomaCtrl = $controller('DiplomaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
