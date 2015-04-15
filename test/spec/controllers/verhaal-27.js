'use strict';

describe('Controller: Verhaal27Ctrl', function () {

  // load the controller's module
  beforeEach(module('cnmeApp'));

  var Verhaal27Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Verhaal27Ctrl = $controller('Verhaal27Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
