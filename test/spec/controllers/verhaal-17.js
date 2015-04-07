'use strict';

describe('Controller: Verhaal17Ctrl', function () {

  // load the controller's module
  beforeEach(module('cnmeApp'));

  var Verhaal17Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Verhaal17Ctrl = $controller('Verhaal17Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
