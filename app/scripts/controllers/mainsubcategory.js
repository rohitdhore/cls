'use strict';

/**
 * @ngdoc function
 * @name clfApp.controller:MainsubcategoryCtrl
 * @description
 * # MainsubcategoryCtrl
 * Controller of the clfApp
 */
angular.module('clfApp')
  .controller('MainsubcategoryCtrl', function ($scope, $location, Data) {
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
          $scope.currentCategory = Data.getSelectedCategory();
          setSubCategories($scope.currentCategory.id);
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


    $scope.selectCategory = function(category){
		Data.setSelectedCategory(category);
		$scope.currentCategory = Data.getSelectedCategory();
		setSubCategories($scope.currentCategory.id);
    }

    $scope.selectSubCategory = function(subCategory){
    	Data.setSelectedSubCategory(subCategory);
    	$location.path('/listing');
    }

  });
