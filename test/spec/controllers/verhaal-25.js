'use strict';

describe('Controller: Verhaal25Ctrl', function () {

  // load the controller's module
  beforeEach(module('cnmeApp'));

  var Verhaal25Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Verhaal25Ctrl = $controller('Verhaal25Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
