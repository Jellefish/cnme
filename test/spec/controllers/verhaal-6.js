'use strict';

describe('Controller: Verhaal6Ctrl', function () {

  // load the controller's module
  beforeEach(module('cnmeApp'));

  var Verhaal6Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Verhaal6Ctrl = $controller('Verhaal6Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
