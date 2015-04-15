'use strict';

describe('Controller: Verhaal31Ctrl', function () {

  // load the controller's module
  beforeEach(module('cnmeApp'));

  var Verhaal31Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Verhaal31Ctrl = $controller('Verhaal31Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
