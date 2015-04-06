'use strict';

describe('Controller: Verhaal18Ctrl', function () {

  // load the controller's module
  beforeEach(module('cnmeApp'));

  var Verhaal18Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Verhaal18Ctrl = $controller('Verhaal18Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
