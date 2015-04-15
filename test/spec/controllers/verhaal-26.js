'use strict';

describe('Controller: Verhaal26Ctrl', function () {

  // load the controller's module
  beforeEach(module('cnmeApp'));

  var Verhaal26Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Verhaal26Ctrl = $controller('Verhaal26Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
