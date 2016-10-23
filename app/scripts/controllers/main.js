'use strict';

/**
 * @ngdoc function
 * @name clfApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clfApp
 */
angular.module('clfApp')
  .controller('MainCtrl', function ($scope, $location, Data) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.categories = [];
    function loadInitialData(){
      Data.getCategories().then(function(response) {
          // this callback will be called asynchronously
          // when the response is available
          $scope.categories = response.data.categories;
        }, function(error) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
    }
    loadInitialData();

    $scope.selectCategory = function(category){
      Data.setSelectedCategory(category);
      $location.path('/subCategory');
    }
    
  });
