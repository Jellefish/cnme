'use strict';

describe('Controller: VerhaalCtrl', function () {

  // load the controller's module
  beforeEach(module('cnmeApp'));

  var VerhaalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VerhaalCtrl = $controller('VerhaalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
