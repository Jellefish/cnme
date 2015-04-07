'use strict';

describe('Controller: Verhaal7Ctrl', function () {

  // load the controller's module
  beforeEach(module('cnmeApp'));

  var Verhaal7Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Verhaal7Ctrl = $controller('Verhaal7Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
