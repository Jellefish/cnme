'use strict';

describe('Controller: Verhaal20Ctrl', function () {

  // load the controller's module
  beforeEach(module('cnmeApp'));

  var Verhaal20Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Verhaal20Ctrl = $controller('Verhaal20Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
