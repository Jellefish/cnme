'use strict';

describe('Controller: Verhaal21Ctrl', function () {

  // load the controller's module
  beforeEach(module('cnmeApp'));

  var Verhaal21Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Verhaal21Ctrl = $controller('Verhaal21Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
