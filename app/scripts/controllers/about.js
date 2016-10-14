'use strict';

/**
 * @ngdoc function
 * @name clfApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clfApp
 */
angular.module('clfApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
