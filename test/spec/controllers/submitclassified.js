'use strict';

describe('Controller: SubmitclassifiedCtrl', function () {

  // load the controller's module
  beforeEach(module('clfApp'));

  var SubmitclassifiedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubmitclassifiedCtrl = $controller('SubmitclassifiedCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
