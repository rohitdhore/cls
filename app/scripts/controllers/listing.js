'use strict';

/**
 * @ngdoc function
 * @name clfApp.controller:ListingCtrl
 * @description
 * # ListingCtrl
 * Controller of the clfApp
 */
angular.module('clfApp')
  .controller('ListingCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
