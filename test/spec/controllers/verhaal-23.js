'use strict';

describe('Controller: Verhaal23Ctrl', function () {

  // load the controller's module
  beforeEach(module('cnmeApp'));

  var Verhaal23Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Verhaal23Ctrl = $controller('Verhaal23Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
