'use strict';

/**
 * @ngdoc function
 * @name clfApp.controller:ListingCtrl
 * @description
 * # ListingCtrl
 * Controller of the clfApp
 */
angular.module('clfApp')
  .controller('ListingCtrl', function ($scope, $location, Data) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.categories = [];
    $scope.list = null;
    function loadInitialData(){
      Data.getCategories().then(function(response) {
          // this callback will be called asynchronously
          // when the response is available
          $scope.categories = response.data.categories;
          $scope.currentCategory = Data.getSelectedCategory();
          $scope.currentSubCategory = Data.getSelectedSubCategory();
          setSubCategories($scope.currentCategory.id);
          Data.getClassifieds().then(function(response) {
	          // this callback will be called asynchronously
	          // when the response is available
	          $scope.list = response.data.list;
	        }, function(error) {
	          // called asynchronously if an error occurs
	          // or server returns response with an error status.
	        });
        }, function(error) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
    }
    loadInitialData();

    function setSubCategories(currentId){
    	var index = $scope.categories.map(function(e) { return e.id; }).indexOf($scope.currentCategory.id);
    	$scope.subCategories = $scope.categories[index].subCategories;
    }

    $scope.openDetails = function(item){
    	$location.path('/detail');
    }
  });
