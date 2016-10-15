'use strict';

describe('Controller: MainsubcategoryCtrl', function () {

  // load the controller's module
  beforeEach(module('clfApp'));

  var MainsubcategoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainsubcategoryCtrl = $controller('MainsubcategoryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
