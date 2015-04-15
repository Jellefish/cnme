'use strict';

describe('Controller: Verhaal30Ctrl', function () {

  // load the controller's module
  beforeEach(module('cnmeApp'));

  var Verhaal30Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Verhaal30Ctrl = $controller('Verhaal30Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
