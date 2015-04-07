'use strict';

describe('Controller: Verhaal19Ctrl', function () {

  // load the controller's module
  beforeEach(module('cnmeApp'));

  var Verhaal19Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Verhaal19Ctrl = $controller('Verhaal19Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
