'use strict';

/**
 * @ngdoc function
 * @name clfApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clfApp
 */
angular.module('clfApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
