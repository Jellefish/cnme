'use strict';

describe('Controller: VoortgangCtrl', function () {

  // load the controller's module
  beforeEach(module('cnmeApp'));

  var VoortgangCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VoortgangCtrl = $controller('VoortgangCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
