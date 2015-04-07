'use strict';

describe('Controller: InformatieCtrl', function () {

  // load the controller's module
  beforeEach(module('cnmeApp'));

  var InformatieCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InformatieCtrl = $controller('InformatieCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
