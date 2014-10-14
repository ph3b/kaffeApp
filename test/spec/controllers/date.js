'use strict';

describe('Controller: DateCtrl', function () {

  // load the controller's module
  beforeEach(module('kaffeAppApp'));

  var DateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DateCtrl = $controller('DateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
