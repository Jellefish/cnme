'use strict';

describe('Controller: Verhaal34Ctrl', function () {

  // load the controller's module
  beforeEach(module('cnmeApp'));

  var Verhaal34Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Verhaal34Ctrl = $controller('Verhaal34Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
